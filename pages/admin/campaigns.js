import React from 'react';

const campaigns = [
  {
    id: 1,
    name: 'Kampanya 1',
    platform: 'Meta',
    budget: '$3,000',
    spent: '$1,500',
    roas: '3.5x',
    conversions: '150',
    startDate: '01 Haz 2025',
    endDate: '01 Tem 2025',
    status: 'Aktif',
  },
  {
    id: 2,
    name: 'Kampanya 2',
    platform: 'Google',
    budget: '$5,000',
    spent: '$2,800',
    roas: '2.0x',
    conversions: '120',
    startDate: '15 May 2025',
    endDate: '15 Haz 2025',
    status: 'Beklemede',
  },
  {
    id: 3,
    name: 'Kampanya 3',
    platform: 'TikTok',
    budget: '$1,800',
    spent: '$900',
    roas: '1.8x',
    conversions: '80',
    startDate: '01 May 2025',
    endDate: '01 Haz 2025',
    status: 'Durduruldu',
  },
];

const Campaigns = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4">Kampanyalar</h1>
      
      {/* Kampanyalar Tablosu */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Aktif Kampanyalar</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Kampanya Adı</th>
              <th className="p-2 text-left">Platform</th>
              <th className="p-2 text-left">Bütçe</th>
              <th className="p-2 text-left">Harcanan</th>
              <th className="p-2 text-left">ROAS</th>
              <th className="p-2 text-left">Dönüşümler</th>
              <th className="p-2 text-left">Başlangıç</th>
              <th className="p-2 text-left">Bitiş</th>
              <th className="p-2 text-left">Durum</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="border-b">
                <td className="p-2">{campaign.name}</td>
                <td className="p-2">{campaign.platform}</td>
                <td className="p-2">{campaign.budget}</td>
                <td className="p-2">{campaign.spent}</td>
                <td className="p-2">{campaign.roas}</td>
                <td className="p-2">{campaign.conversions}</td>
                <td className="p-2">{campaign.startDate}</td>
                <td className="p-2">{campaign.endDate}</td>
                <td className="p-2 text-green-500">{campaign.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Campaigns;
