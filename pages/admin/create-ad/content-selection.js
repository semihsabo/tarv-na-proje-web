import { useRouter } from 'next/router';

import MetaContentSelection from './MetaContentSelection';
import GoogleAdsContentSelection from './GoogleAdsContentSelection';
import TiktokContentSelection from './TiktokContentSelection';

export default function ContentSelectionPage() {
  const { platform } = useRouter().query;

  if (!platform) {
    return <div className="p-8 text-center">Please select a platform.</div>;
  }

  if (platform === 'meta') {
    return <MetaContentSelection />;
  } else if (platform === 'google') {
    return <GoogleAdsContentSelection />;
  } else if (platform === 'tiktok') {
    return <TiktokContentSelection />;
  } else {
    return <div className="p-8 text-center">Platform "{platform}" is not supported.</div>;
  }
}
