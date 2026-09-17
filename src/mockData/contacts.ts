export interface ContactItem {
  id: string;
  name: string;
  category: 'Hospitals' | 'Police' | 'Ambulance' | 'Fire' | 'Blood Banks';
  phone: string;
  distance?: string;
  badge?: string;
  verified?: boolean;
}

export const mockContacts: ContactItem[] = [
  // Ambulance
  {
    id: 'c-amb-1',
    name: 'National Emergency Ambulance Service',
    category: 'Ambulance',
    phone: '108',
    distance: '3.1 km (Nearest Unit)',
    badge: 'Govt 24/7 Toll-Free',
    verified: true
  },
  // Fire
  {
    id: 'c-fire-1',
    name: 'Jaipur Fire & Emergency Department',
    category: 'Fire',
    phone: '101',
    distance: '2.8 km (Malviya Station)',
    badge: 'Govt 24/7 Toll-Free',
    verified: true
  },
  // Hospitals (3 items)
  {
    id: 'c-hosp-1',
    name: 'Sewai Hospital Emergency Trauma',
    category: 'Hospitals',
    phone: '+91 141 278 9000',
    distance: '2.4 km',
    badge: 'Trauma L2 • 8 min ETA',
    verified: true
  },
  {
    id: 'c-hosp-2',
    name: 'City Hospital Emergency Care',
    category: 'Hospitals',
    phone: '+91 141 256 1234',
    distance: '4.8 km',
    badge: 'Trauma L3 • 14 min ETA',
    verified: true
  },
  {
    id: 'c-hosp-3',
    name: 'Apex Medical Emergency & ICU',
    category: 'Hospitals',
    phone: '+91 141 275 8899',
    distance: '6.7 km',
    badge: 'Trauma L4 • 18 min ETA',
    verified: true
  },
  // Police (2 items)
  {
    id: 'c-pol-1',
    name: 'Malviya Nagar Police Station',
    category: 'Police',
    phone: '+91 141 272 1100',
    distance: '1.8 km',
    badge: 'Direct Station',
    verified: true
  },
  {
    id: 'c-pol-2',
    name: 'Jaipur Traffic Police Control Room',
    category: 'Police',
    phone: '112',
    distance: '3.4 km',
    badge: 'Integrated Emergency 112',
    verified: true
  },
  // Blood Banks (2 items)
  {
    id: 'c-blood-1',
    name: 'SMS Rotay Blood Bank & Component Lab',
    category: 'Blood Banks',
    phone: '+91 141 251 8222',
    distance: '5.2 km',
    badge: 'All Blood Groups Ready',
    verified: true
  },
  {
    id: 'c-blood-2',
    name: 'Swasthya Kalyan Blood Bank',
    category: 'Blood Banks',
    phone: '+91 141 250 3344',
    distance: '6.0 km',
    badge: '24/7 Platelets & Plasma',
    verified: true
  }
];
