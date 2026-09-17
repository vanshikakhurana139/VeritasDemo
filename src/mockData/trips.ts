export interface TripEvent {
  type: 'hazard' | 'braking' | 'acceleration' | 'drowsiness' | 'speeding';
  label: string;
  count: number;
  severity: 'good' | 'warning' | 'critical';
}

export interface TripItem {
  id: string;
  title: string;
  date: string;
  time: string;
  distance: string;
  distanceKm: number;
  duration: string;
  avgSpeed: string;
  safetyScore: number;
  hazardsDetected: number;
  events: TripEvent[];
}

export const mockTrips: TripItem[] = [
  {
    id: 'trip-current',
    title: 'Work to Home (Evening Commute)',
    date: 'Today, 17 Sep',
    time: '07:45 PM',
    distance: '12.4 km',
    distanceKm: 12.4,
    duration: '28 min',
    avgSpeed: '26 km/h',
    safetyScore: 87,
    hazardsDetected: 2,
    events: [
      { type: 'hazard', label: 'Hazards detected', count: 2, severity: 'good' },
      { type: 'braking', label: 'Harsh braking event', count: 1, severity: 'warning' },
      { type: 'drowsiness', label: 'Drowsiness events', count: 0, severity: 'good' },
      { type: 'speeding', label: 'Overspeeding alerts', count: 0, severity: 'good' }
    ]
  },
  {
    id: 'trip-2',
    title: 'Morning Office Run',
    date: 'Yesterday, 16 Sep',
    time: '08:30 AM',
    distance: '14.1 km',
    duration: '32 min',
    distanceKm: 14.1,
    avgSpeed: '29 km/h',
    safetyScore: 92,
    hazardsDetected: 1,
    events: [
      { type: 'hazard', label: 'Hazards detected', count: 1, severity: 'good' },
      { type: 'braking', label: 'Harsh braking event', count: 0, severity: 'good' },
      { type: 'drowsiness', label: 'Drowsiness events', count: 0, severity: 'good' },
      { type: 'speeding', label: 'Overspeeding alerts', count: 0, severity: 'good' }
    ]
  },
  {
    id: 'trip-3',
    title: 'Weekend Highway Drive',
    date: 'Sunday, 14 Sep',
    time: '04:15 PM',
    distance: '38.6 km',
    duration: '52 min',
    distanceKm: 38.6,
    avgSpeed: '48 km/h',
    safetyScore: 84,
    hazardsDetected: 4,
    events: [
      { type: 'hazard', label: 'Hazards detected', count: 4, severity: 'good' },
      { type: 'braking', label: 'Harsh braking events', count: 2, severity: 'warning' },
      { type: 'drowsiness', label: 'Drowsiness events', count: 1, severity: 'warning' },
      { type: 'speeding', label: 'Overspeeding alerts', count: 0, severity: 'good' }
    ]
  }
];
