export interface HazardItem {
  id: string;
  type: 'Pothole' | 'Construction' | 'Waterlogging' | 'Accident' | 'Blockage' | 'Other';
  lat: number;
  lng: number;
  distance: string;
  distanceMeters: number;
  confidence: number;
  timestamp: string;
  status: 'active' | 'confirmed' | 'cleared';
  severity: 'low' | 'medium' | 'high' | 'critical';
  confirmations: number;
  locationName: string;
}

export const mockHazards: HazardItem[] = [
  {
    id: 'haz-1',
    type: 'Pothole',
    lat: 26.4042,
    lng: 75.7925,
    distance: '200 m ahead',
    distanceMeters: 200,
    confidence: 82,
    timestamp: '2 min ago',
    status: 'active',
    severity: 'high',
    confirmations: 3,
    locationName: 'JLN Marg, Near Apex Circle'
  },
  {
    id: 'haz-2',
    type: 'Pothole',
    lat: 26.4018,
    lng: 75.7891,
    distance: '400 m away',
    distanceMeters: 400,
    confidence: 76,
    timestamp: '5 min ago',
    status: 'confirmed',
    severity: 'medium',
    confirmations: 5,
    locationName: 'Tonk Road Overbridge'
  },
  {
    id: 'haz-3',
    type: 'Construction',
    lat: 26.3980,
    lng: 75.7830,
    distance: '1.2 km away',
    distanceMeters: 1200,
    confidence: 94,
    timestamp: '8 min ago',
    status: 'active',
    severity: 'medium',
    confirmations: 12,
    locationName: 'Metro Pillar 142 Flyover'
  },
  {
    id: 'haz-4',
    type: 'Waterlogging',
    lat: 26.3912,
    lng: 75.7760,
    distance: '2.8 km away',
    distanceMeters: 2800,
    confidence: 88,
    timestamp: '15 min ago',
    status: 'active',
    severity: 'high',
    confirmations: 8,
    locationName: 'Sanganer Underpass'
  },
  {
    id: 'haz-5',
    type: 'Accident',
    lat: 26.4150,
    lng: 75.8050,
    distance: '3.5 km away',
    distanceMeters: 3500,
    confidence: 91,
    timestamp: '12 min ago',
    status: 'active',
    severity: 'critical',
    confirmations: 9,
    locationName: 'B2 Bypass Junction'
  },
  {
    id: 'haz-6',
    type: 'Blockage',
    lat: 26.4220,
    lng: 75.8120,
    distance: '4.1 km away',
    distanceMeters: 4100,
    confidence: 80,
    timestamp: '25 min ago',
    status: 'confirmed',
    severity: 'medium',
    confirmations: 4,
    locationName: 'Rambagh Circle North'
  },
  {
    id: 'haz-7',
    type: 'Waterlogging',
    lat: 26.3820,
    lng: 75.7650,
    distance: '5.1 km away',
    distanceMeters: 5100,
    confidence: 72,
    timestamp: '18 min ago',
    status: 'active',
    severity: 'medium',
    confirmations: 3,
    locationName: 'Sitapura Industrial Area Gate 3'
  },
  {
    id: 'haz-8',
    type: 'Pothole',
    lat: 26.4310,
    lng: 75.8210,
    distance: '6.4 km away',
    distanceMeters: 6400,
    confidence: 69,
    timestamp: '40 min ago',
    status: 'confirmed',
    severity: 'low',
    confirmations: 2,
    locationName: 'MI Road, Lane 4'
  },
  {
    id: 'haz-9',
    type: 'Construction',
    lat: 26.4450,
    lng: 75.8340,
    distance: '7.8 km away',
    distanceMeters: 7800,
    confidence: 89,
    timestamp: '1 hour ago',
    status: 'active',
    severity: 'medium',
    confirmations: 16,
    locationName: 'Ajmer Road Elevated Expressway'
  },
  {
    id: 'haz-10',
    type: 'Blockage',
    lat: 26.4520,
    lng: 75.8450,
    distance: '9.2 km away',
    distanceMeters: 9200,
    confidence: 85,
    timestamp: '2 hours ago',
    status: 'cleared',
    severity: 'low',
    confirmations: 6,
    locationName: 'Civil Lines Crossing'
  }
];
