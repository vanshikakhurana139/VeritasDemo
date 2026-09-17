export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  safetyScore: number;
  ratingLabel: string;
  dashcam: {
    deviceId: string;
    model: string;
    connected: boolean;
    battery: number;
    storageRemaining: string;
    firmware: string;
  };
  totalTrips: number;
  totalDistanceKm: number;
  hazardsReported: number;
  emergencyContactsCount: number;
}

export const mockUser: UserProfile = {
  name: "Khushi Sharma",
  email: "khushi@example.com",
  phone: "+91 98765 43210",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  safetyScore: 87,
  ratingLabel: "Good",
  dashcam: {
    deviceId: "ESP32-ABC123",
    model: "VERITAS Sentinel Cam v2.1",
    connected: true,
    battery: 78,
    storageRemaining: "42.5 GB",
    firmware: "v1.4.2"
  },
  totalTrips: 48,
  totalDistanceKm: 684.2,
  hazardsReported: 14,
  emergencyContactsCount: 3
};
