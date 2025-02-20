import { Link as WaspRouterLink, routes } from 'wasp/client/router';
import { VerifyEmailForm } from 'wasp/client/auth';
import { AuthPageLayout } from '../AuthPageLayout';

export function EmailVerificationPage() {
  if (process.env.SKIP_EMAIL_VERIFICATION_IN_DEV === 'true') {
    return (
      <AuthPageLayout>
        <span className='text-sm font-medium text-gray-900'>
          Email verification is skipped in development mode.
        </span>
      </AuthPageLayout>
    );
  }

  return (
    <AuthPageLayout>
      <VerifyEmailForm />
      <br />
      <span className='text-sm font-medium text-gray-900'>
        If everything is okay, <WaspRouterLink to={routes.LoginRoute.to} className='underline'>go to login</WaspRouterLink>
      </span>
    </AuthPageLayout>
  );
}
