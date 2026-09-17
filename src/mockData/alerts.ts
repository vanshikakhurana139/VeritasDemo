export interface AlertItem {
  id: string;
  type: 'Pothole' | 'Construction' | 'Accident' | 'Waterlogging' | 'Traffic Jam' | 'Debris';
  category: 'Hazards' | 'Incidents' | 'Traffic';
  distance: string;
  confidence: 'high' | 'medium' | 'low';
  confidencePercentage: number;
  timestamp: string;
  location: string;
  severity: 'critical' | 'warning' | 'info';
  confirmedCount: number;
}

export const mockAlerts: AlertItem[] = [
  {
    id: 'alt-1',
    type: 'Pothole',
    category: 'Hazards',
    distance: '200 m ahead',
    confidence: 'high',
    confidencePercentage: 86,
    timestamp: '2 min ago',
    location: 'JLN Marg, Right Lane',
    severity: 'critical',
    confirmedCount: 3
  },
  {
    id: 'alt-2',
    type: 'Construction',
    category: 'Incidents',
    distance: '1.2 km ahead',
    confidence: 'medium',
    confidencePercentage: 74,
    timestamp: '8 min ago',
    location: 'Metro Pillar 142 Flyover',
    severity: 'warning',
    confirmedCount: 12
  },
  {
    id: 'alt-3',
    type: 'Accident',
    category: 'Incidents',
    distance: '3.5 km ahead',
    confidence: 'high',
    confidencePercentage: 92,
    timestamp: '12 min ago',
    location: 'B2 Bypass Junction',
    severity: 'critical',
    confirmedCount: 8
  },
  {
    id: 'alt-4',
    type: 'Waterlogging',
    category: 'Hazards',
    distance: '5.1 km ahead',
    confidence: 'medium',
    confidencePercentage: 68,
    timestamp: '18 min ago',
    location: 'Sanganer Underpass, Lane 2',
    severity: 'warning',
    confirmedCount: 5
  },
  {
    id: 'alt-5',
    type: 'Traffic Jam',
    category: 'Traffic',
    distance: '6.4 km ahead',
    confidence: 'high',
    confidencePercentage: 95,
    timestamp: '4 min ago',
    location: 'Ajmer Phatak Intersection',
    severity: 'warning',
    confirmedCount: 22
  },
  {
    id: 'alt-6',
    type: 'Debris',
    category: 'Hazards',
    distance: '7.1 km ahead',
    confidence: 'medium',
    confidencePercentage: 70,
    timestamp: '22 min ago',
    location: 'Gopalpura Bypass Elevated Road',
    severity: 'info',
    confirmedCount: 4
  },
  {
    id: 'alt-7',
    type: 'Accident',
    category: 'Incidents',
    distance: '8.8 km ahead',
    confidence: 'medium',
    confidencePercentage: 79,
    timestamp: '31 min ago',
    location: 'Mansarovar Metro Station Road',
    severity: 'critical',
    confirmedCount: 6
  },
  {
    id: 'alt-8',
    type: 'Traffic Jam',
    category: 'Traffic',
    distance: '10.2 km ahead',
    confidence: 'high',
    confidencePercentage: 88,
    timestamp: '15 min ago',
    location: 'MI Road Central Square',
    severity: 'warning',
    confirmedCount: 17
  }
];
