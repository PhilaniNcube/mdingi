import { z } from 'zod'

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
  notes: z.string().max(1000, 'Notes must be at most 1000 characters').optional(),
})

export type BookingInput = z.infer<typeof bookingSchema>
