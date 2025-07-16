import { useRouter } from 'next/router';

import MetaContentSelection from './MetaContentSelection';
import GoogleAdsContentSelection from './GoogleAdsContentSelection';
import TiktokContentSelection from './TiktokContentSelection';

export default function ContentSelectionPage() {
  const { platform } = useRouter().query;

  if (!platform) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 text-center bg-gray-50">
        <p className="text-base sm:text-lg text-gray-600">
          Please select a platform to continue.
        </p>
      </div>
    );
  }

  if (platform === 'meta') {
    return <MetaContentSelection />;
  } else if (platform === 'google') {
    return <GoogleAdsContentSelection />;
  } else if (platform === 'tiktok') {
    return <TiktokContentSelection />;
  } else {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 text-center bg-red-50">
        <p className="text-base sm:text-lg text-red-600 font-medium">
          Platform "{platform}" is not supported.
        </p>
      </div>
    );
  }
}
