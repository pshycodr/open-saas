import { type GetVerificationEmailContentFn, type GetPasswordResetEmailContentFn } from 'wasp/server/auth';

export const getVerificationEmailContent: GetVerificationEmailContentFn = ({ verificationLink }) => {
  if (process.env.SKIP_EMAIL_VERIFICATION_IN_DEV === 'true') {
    return {
      subject: 'Email verification skipped',
      text: 'Email verification is skipped in development mode.',
      html: '<p>Email verification is skipped in development mode.</p>',
    };
  }

  return {
    subject: 'Verify your email',
    text: `Click the link below to verify your email: ${verificationLink}`,
    html: `
        <p>Click the link below to verify your email</p>
        <a href="${verificationLink}">Verify email</a>
    `,
  };
};

export const getPasswordResetEmailContent: GetPasswordResetEmailContentFn = ({ passwordResetLink }) => ({
  subject: 'Password reset',
  text: `Click the link below to reset your password: ${passwordResetLink}`,
  html: `
        <p>Click the link below to reset your password</p>
        <a href="${passwordResetLink}">Reset password</a>
    `,
});
