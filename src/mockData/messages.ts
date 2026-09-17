export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  isUrgent?: boolean;
}

export const initialChatMessages: ChatMessage[] = [
  {
    id: 'm-1',
    sender: 'bot',
    text: 'Hi! Ask me any first-aid question. I work completely offline using on-device edge AI.',
    timestamp: '07:44 PM'
  },
  {
    id: 'm-2',
    sender: 'user',
    text: 'How to stop bleeding?',
    timestamp: '07:45 PM'
  },
  {
    id: 'm-3',
    sender: 'bot',
    text: '1. Apply direct pressure with a clean cloth or gauze.\n2. Keep steady pressure for 10 minutes without lifting.\n3. Elevate the wounded limb above heart level if no fracture.\n4. Call 108 immediately if blood spurts or soaking persists.',
    timestamp: '07:45 PM',
    isUrgent: true
  }
];

export const quickPromptChips = [
  'CPR steps?',
  'Burns?',
  'Fracture?',
  'Move injured?'
];

export const cannedResponses: Record<string, string> = {
  'CPR steps?': '1. Check responsiveness and breathing.\n2. Call 108 immediately.\n3. Place heel of hand on center of chest.\n4. Push hard & fast: 100-120 beats/min (2 inches deep).\n5. Continue until paramedics arrive.',
  'Burns?': '1. Cool with gently running room-temp water for 10-20 min.\n2. Do NOT apply ice, butter, or oil.\n3. Cover loosely with sterile cling wrap or clean cloth.\n4. Seek emergency care if blistered or large.',
  'Fracture?': '1. Do NOT attempt to straighten the limb.\n2. Immobilize joint above and below injury with a splint.\n3. Apply ice pack wrapped in cloth to reduce swelling.\n4. Call 108 or arrange urgent hospital transfer.',
  'Move injured?': '⚠️ DO NOT move an injured person unless there is immediate danger (fire, explosion, traffic).\nMoving can worsen spinal and neck injuries. Keep head and neck aligned.'
};
