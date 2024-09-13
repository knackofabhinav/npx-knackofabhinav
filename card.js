#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
const qrcode = require('qrcode-terminal');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
            {
                name: `📧 Send me an ${chalk.green.bold("email")}`,
                value: () => {
                    const subject = "Reaching out from your CLI Business Card - [Your Name]";
                    const body = `Hi Abhinav,

I found your CLI business card interesting and wanted to reach out.

[Your message here]

Best regards,
[Your Name]`;

                    const gmailUrl = createGmailComposeUrl(
                        'knackofabhinav@gmail.com',
                        subject,
                        body
                    );
                    open(gmailUrl);
                    console.log("\nGreat! I look forward to reading your message. Don't forget to replace the placeholders in the email template.\n");
                }
            },
           
            {
                name: `🗓 Schedule a ${chalk.redBright.bold("meeting")}`,
                value: () => {
                    open('https://calendly.com/knackofabhinav/30min');
                    console.log("\nExcellent! I'm excited to meet with you.\n");
                }
            },
            {
                name: "👋 Exit",
                value: () => {
                    console.log(chalk.green.bold("Thanks for stopping by! Have a fantastic day! 😊\n"));
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("Abhinav Patel"),
    work: `${chalk.white("Full Stack Engineer at")} ${chalk.hex("#2b82b2").bold("GeekyAnts")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("knackofabhinav"),
    github: chalk.gray("https://github.com/") + chalk.green("knackofabhinav"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("knackofabhinav"),
    web: chalk.cyan("https://knackofabhinav.com"),
    npx: chalk.red("npx") + " " + chalk.white("knackofabhinav"),
    labelTwitter: chalk.yellow.bold("Twitter:"),
    labelGitHub: chalk.yellow.bold("GitHub:"),
    labelLinkedIn: chalk.yellow.bold("LinkedIn:"),
    labelWeb: chalk.yellow.bold("Web:"),
    labelCard: chalk.yellow.bold("Card:"),
    labelBio: chalk.magenta.bold("Bio:"),
    bio: [
        chalk.italic("🚀 Building the products that make a difference."),
        chalk.italic("💡 Let's connect and build something amazing together!")
    ].join('\n')
};

// Generate QR code as an array of centered strings
let qrCodeLines = [];
qrcode.generate(data.web, { small: true }, (qr) => {
  qrCodeLines = qr.split('\n').map(line => line.trimEnd());
  const maxLength = Math.max(...qrCodeLines.map(line => line.length));
  qrCodeLines = qrCodeLines.map(line => line.padStart((maxLength + line.length) / 2).padEnd(maxLength));
});

const me = boxen(
    [
        `${qrCodeLines.join('\n')}`,
        ``,
        `${data.name}`,
        `${data.work}`,
        ``,
        `${data.bio}`,
        ``,
        `${data.labelTwitter}  ${chalk.gray("𝕏")} ${data.twitter}`,
        `${data.labelGitHub}  ${chalk.gray("")} ${data.github}`,
        `${data.labelLinkedIn}  ${chalk.gray("")} ${data.linkedin}`,
        `${data.labelWeb}  ${chalk.gray("🌐")} ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "round",
        borderColor: "cyan",
        borderWidth: 2,
        textAlignment: 'center'
    }
);

console.log(me);

const tip = [
    `Tip: Copy and paste the URLs into your browser to visit the links`,
    '',
    `Or run ${chalk.cyanBright.bold("npx knackofabhinav")} again to select an action.`,
    ''
].join("\n");

const spinner = ora({
  text: 'Loading options...',
  spinner: 'dots'
}).start();

try {
  setTimeout(() => {
    spinner.stop();
    console.log(tip);
    prompt(questions)
      .then(answer => answer.action())
      .catch(error => {
        console.error('An error occurred:', error);
      });
  }, 1500);
} catch (error) {
  console.error('An unexpected error occurred:', error);
}

function createGmailComposeUrl(to, subject = '', body = '') {
  const params = new URLSearchParams();
  params.append('to', to);
  if (subject) params.append('su', subject);
  if (body) params.append('body', body);
  return `https://mail.google.com/mail/?view=cm&fs=1&tf=1&${params.toString()}`;
}