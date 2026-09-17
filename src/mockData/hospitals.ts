export interface HospitalItem {
  id: string;
  name: string;
  traumaLevel: string;
  specializations: string[];
  distance: string;
  eta: string;
  isBestMatch?: boolean;
  phone: string;
  address: string;
  emergencyBedsAvailable: number;
  icuAvailable: boolean;
  bloodBankReady: boolean;
}

export const mockHospitals: HospitalItem[] = [
  {
    id: 'hosp-1',
    name: 'Sewai Hospital',
    traumaLevel: 'Trauma Level 2',
    specializations: ['Neurosurgery', 'Trauma Resuscitation', 'Critical Care'],
    distance: '2.4 km',
    eta: '8 min',
    isBestMatch: true,
    phone: '+91 141 278 9000',
    address: 'Sector 5, Malviya Nagar, Jaipur',
    emergencyBedsAvailable: 6,
    icuAvailable: true,
    bloodBankReady: true
  },
  {
    id: 'hosp-2',
    name: 'City Hospital',
    traumaLevel: 'Trauma Level 3',
    specializations: ['Orthopedics', 'General Surgery', 'Cardiac Support'],
    distance: '4.8 km',
    eta: '14 min',
    isBestMatch: false,
    phone: '+91 141 256 1234',
    address: 'Near Tonk Phatak, Jaipur',
    emergencyBedsAvailable: 4,
    icuAvailable: true,
    bloodBankReady: false
  },
  {
    id: 'hosp-3',
    name: 'Apex Medical Centre',
    traumaLevel: 'Trauma Level 4',
    specializations: ['General Emergency', 'First Aid Trauma', 'Pediatrics'],
    distance: '6.7 km',
    eta: '18 min',
    isBestMatch: false,
    phone: '+91 141 275 8899',
    address: 'Apex Circle, VT Road, Mansarovar',
    emergencyBedsAvailable: 9,
    icuAvailable: false,
    bloodBankReady: true
  },
  {
    id: 'hosp-4',
    name: 'Fortis Escorts Emergency Unit',
    traumaLevel: 'Trauma Level 1',
    specializations: ['Polytrauma', 'Cardiovascular', 'Neurology'],
    distance: '8.2 km',
    eta: '21 min',
    isBestMatch: false,
    phone: '+91 141 254 7000',
    address: 'Jawaharlal Nehru Marg, Jaipur',
    emergencyBedsAvailable: 11,
    icuAvailable: true,
    bloodBankReady: true
  },
  {
    id: 'hosp-5',
    name: 'SMS Medical College & Hospital',
    traumaLevel: 'Trauma Level 1 (Apex)',
    specializations: ['Neurosurgery', 'Spine Trauma', 'Burns Unit'],
    distance: '9.5 km',
    eta: '25 min',
    isBestMatch: false,
    phone: '+91 141 256 0291',
    address: 'JLN Marg, Ashok Nagar, Jaipur',
    emergencyBedsAvailable: 24,
    icuAvailable: true,
    bloodBankReady: true
  }
];
