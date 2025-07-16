import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "@/components/Topbar";
import {
  FaBell, FaUser, FaLock, FaKey, FaUsers, FaCreditCard, FaEnvelope, FaSms, FaExclamationTriangle, FaCheckCircle, FaUserPlus
} from "react-icons/fa";

const TABS = [
  { key: "profile",        label: "Profile",        icon: <FaUser /> },
  { key: "notifications",  label: "Notifications",  icon: <FaBell /> },
  { key: "security",       label: "Security",       icon: <FaLock /> },
  { key: "password",       label: "Password",       icon: <FaKey /> },
  { key: "team",           label: "Team Members",   icon: <FaUsers /> },
  { key: "billing",        label: "Billing & Preferences", icon: <FaCreditCard /> },
];

export default function SettingsPage() {
  const [active, setActive] = useState("profile");

  return (
    <main className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="flex-1 p-0 md:p-8">
          {/* Header */}
          <div>
            <div className="mb-4 mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
                <p className="text-gray-500 mt-1">Manage your profile, security and team preferences.</p>
              </div>
              <div className="flex gap-2">
                <input
                  type="search"
                  placeholder="Search settings..."
                  className="border rounded-md px-3 py-2 text-sm w-full md:w-56"
                />
              </div>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto gap-2 mb-6 border-b border-gray-200">
              {TABS.map(tab => (
                <button
                  key={tab.key}
                  className={`
                    flex items-center gap-2 py-2 px-4 whitespace-nowrap border-b-2 transition
                    ${active === tab.key ? "border-purple-600 text-purple-600 font-semibold bg-purple-50" : "border-transparent text-gray-500 hover:text-black hover:bg-gray-100"}
                  `}
                  onClick={() => setActive(tab.key)}
                >
                  <span className="text-base">{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Section Content */}
            <div className="bg-white rounded-xl shadow p-6 mb-12 w-full">
              {active === "profile"       && <ProfileSection />}
              {active === "notifications" && <NotificationsSection />}
              {active === "security"      && <SecuritySection />}
              {active === "password"      && <PasswordSection />}
              {active === "team"          && <TeamSection />}
              {active === "billing"       && <BillingPrefsSection />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// ----------- İçerik Componentleri --------------

function ProfileSection() {
  return (
    <div className="max-w-2xl space-y-8">
      <div className="flex gap-6 items-center">
        <img src="/avatar.png" alt="Avatar" className="w-20 h-20 rounded-full object-cover border" />
        <div>
          <div className="font-bold text-lg">John Doe</div>
          <div className="text-gray-500 text-sm mb-2">john@company.com</div>
          <button className="px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-900">Change Photo</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-gray-500">First Name</label>
          <input defaultValue="John" className="w-full border rounded px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500">Last Name</label>
          <input defaultValue="Doe" className="w-full border rounded px-3 py-2 mt-1" />
        </div>
        <div className="md:col-span-2">
          <label className="text-xs font-semibold text-gray-500">Email Address</label>
          <input defaultValue="john@company.com" className="w-full border rounded px-3 py-2 mt-1" type="email" />
        </div>
        <div className="md:col-span-2">
          <label className="text-xs font-semibold text-gray-500">Bio</label>
          <textarea defaultValue="Professional with 5+ years of experience in advertising campaigns."
            className="w-full border rounded px-3 py-2 mt-1" />
        </div>
      </div>
      <div className="flex gap-2">
        <button className="bg-purple-600 text-white px-6 py-2 rounded font-medium hover:bg-purple-700">Save Changes</button>
        <button className="bg-gray-200 px-6 py-2 rounded font-medium">Cancel</button>
      </div>
    </div>
  );
}

function NotificationsSection() {
  return (
    <div className="max-w-2xl">
      <h2 className="font-semibold text-lg mb-4">Notification Settings</h2>
      <div className="bg-blue-50 border border-blue-200 text-blue-800 p-3 rounded mb-6 flex gap-2 items-center">
        <FaInfo className="mt-0.5" /> <span>Customize how you want to be notified about campaigns, billing and platform updates.</span>
      </div>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">Email notifications</div>
            <div className="text-xs text-gray-500">Get important updates via email</div>
          </div>
          <input type="checkbox" defaultChecked className="w-5 h-5" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">SMS notifications</div>
            <div className="text-xs text-gray-500">Receive SMS for campaign alerts</div>
          </div>
          <input type="checkbox" className="w-5 h-5" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">In-app notifications</div>
            <div className="text-xs text-gray-500">Push notifications inside the dashboard</div>
          </div>
          <input type="checkbox" defaultChecked className="w-5 h-5" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">Product updates</div>
            <div className="text-xs text-gray-500">Feature launches & important announcements</div>
          </div>
          <input type="checkbox" defaultChecked className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

// FaInfo helper (aynı pakette yoksa bu kodu üstte ekle)
function FaInfo(props) {
  return <FaExclamationTriangle {...props} />;
}

function SecuritySection() {
  return (
    <div className="max-w-2xl space-y-6">
      <h2 className="font-semibold text-lg mb-2">Account Security</h2>
      <div className="bg-yellow-50 border border-yellow-200 p-3 rounded flex gap-2 items-center text-yellow-800 mb-6">
        <FaExclamationTriangle /> <span>For extra protection, enable two-factor authentication (2FA).</span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">Two-Factor Authentication (2FA)</div>
          <div className="text-xs text-gray-500">Adds an extra layer of security to your account</div>
        </div>
        <button className="px-4 py-1.5 bg-purple-600 text-white rounded text-sm">Enable 2FA</button>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">Login Alerts</div>
          <div className="text-xs text-gray-500">Be notified if a new device signs in</div>
        </div>
        <input type="checkbox" defaultChecked className="w-5 h-5" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-medium">Device Management</div>
          <div className="text-xs text-gray-500">View and log out from active devices</div>
        </div>
        <button className="px-3 py-1 border rounded text-sm text-gray-700 hover:bg-gray-100">View Devices</button>
      </div>
    </div>
  );
}

function PasswordSection() {
  return (
    <div className="max-w-2xl">
      <h2 className="font-semibold text-lg mb-2">Change Password</h2>
      <div className="bg-red-50 border border-red-200 p-3 rounded text-red-700 flex items-center gap-2 mb-6">
        <FaKey /> <span>Choose a strong password. Never share your credentials with anyone!</span>
      </div>
      <form className="space-y-4 max-w-md">
        <div>
          <label className="text-xs font-semibold text-gray-500">Current Password</label>
          <input type="password" className="w-full border rounded px-3 py-2 mt-1" autoComplete="current-password" />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500">New Password</label>
          <input type="password" className="w-full border rounded px-3 py-2 mt-1" autoComplete="new-password" />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500">Confirm New Password</label>
          <input type="password" className="w-full border rounded px-3 py-2 mt-1" />
        </div>
        <button type="submit" className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Update Password</button>
      </form>
    </div>
  );
}

function TeamSection() {
  return (
    <div className="max-w-3xl">
      <h2 className="font-semibold text-lg mb-2">Team Members</h2>
      <div className="mb-4">
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-900">
          <FaUserPlus /> Invite New Member
        </button>
      </div>
      <div className="space-y-2">
        {[
          { name: "Jane Smith", email: "jane@company.com", role: "Admin", status: "Active" },
          { name: "Alex Lee",   email: "alex@company.com", role: "Editor", status: "Invited" },
        ].map((member, i) => (
          <div key={i} className="flex items-center justify-between border rounded px-4 py-3 bg-gray-50">
            <div>
              <div className="font-semibold">{member.name}</div>
              <div className="text-xs text-gray-500">{member.email} • {member.role}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs font-medium ${member.status === "Active" ? "text-green-600" : "text-yellow-600"}`}>{member.status}</span>
              <button className="text-red-600 text-xs px-2 py-1 rounded hover:bg-red-50">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BillingPrefsSection() {
  const [theme, setTheme] = useState("System");
  return (
    <div className="max-w-2xl space-y-6">
      <h2 className="font-semibold text-lg mb-2">Billing & Preferences</h2>
      <div className="flex flex-col gap-4 bg-gray-50 rounded p-4 border">
        <div className="flex items-center justify-between">
          <span>Current Plan</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs">Pro</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Monthly Spend Limit</span>
          <span>$5,000</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Next Invoice</span>
          <span>01.08.2024 • $420</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Payment Method</span>
          <span className="font-mono">**** 4242</span>
        </div>
        <button className="mt-2 bg-black text-white px-6 py-2 rounded">Update Billing Info</button>
      </div>
      <div className="pt-4 border-t">
        <label className="block mb-2 font-medium">Theme</label>
        <div className="flex gap-2">
          {["Light", "Dark", "System"].map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`px-4 py-2 rounded border ${theme === t ? "bg-black text-white" : "bg-white"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
