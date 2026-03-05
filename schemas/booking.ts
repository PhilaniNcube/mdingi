import { z } from 'zod'

export const timeSlots = [
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
] as const

export const timeSlotLabels: Record<(typeof timeSlots)[number], string> = {
  '08:00': '08:00 AM',
  '08:30': '08:30 AM',
  '09:00': '09:00 AM',
  '09:30': '09:30 AM',
  '10:00': '10:00 AM',
  '10:30': '10:30 AM',
  '11:00': '11:00 AM',
  '11:30': '11:30 AM',
  '12:00': '12:00 PM',
  '12:30': '12:30 PM',
  '13:00': '01:00 PM',
  '13:30': '01:30 PM',
  '14:00': '02:00 PM',
  '14:30': '02:30 PM',
  '15:00': '03:00 PM',
  '15:30': '03:30 PM',
  '16:00': '04:00 PM',
  '16:30': '04:30 PM',
  '17:00': '05:00 PM',
}

export const bookingSchema = z.object({
  patientName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be at most 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(7, 'Phone number must be at least 7 characters')
    .max(20, 'Phone number must be at most 20 characters'),
  service: z.enum(
    [
      'family-planning',
      'antenatal-care',
      'birth-center',
      'postnatal-care',
      'baby-wellness',
      'iv-drip-therapy',
    ],
    { message: 'Please select a valid service' },
  ),
  date: z.string().min(1, 'Please select an appointment date'),
  time: z.enum(timeSlots, { message: 'Please select an appointment time' }),
  notes: z.string().max(1000, 'Notes must be at most 1000 characters').optional(),
})

export type BookingInput = z.infer<typeof bookingSchema>
