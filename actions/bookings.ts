'use server'

import { getPayloadClient } from '@/lib/payload'
import { bookingSchema } from '@/schemas/booking'

export type BookingState =
  | { success: true; id: string }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> }
  | null

export async function createBooking(
  _prevState: unknown,
  formData: FormData,
): Promise<BookingState> {
  const raw = {
    patientName: formData.get('patientName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    date: formData.get('date'),
    notes: formData.get('notes') || undefined,
  }

  const result = bookingSchema.safeParse(raw)

  if (!result.success) {
    return {
      success: false,
      error: 'Validation failed',
      fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]>,
    }
  }

  try {
    const payload = await getPayloadClient()

    const booking = await payload.create({
      collection: 'bookings',
      data: {
        patientName: result.data.patientName,
        email: result.data.email,
        phone: result.data.phone,
        service: result.data.service,
        date: result.data.date,
        notes: result.data.notes ?? '',
        status: 'pending',
      },
    })

    return { success: true, id: String(booking.id) }
  } catch (err) {
    console.error('Failed to create booking:', err)
    return {
      success: false,
      error: err instanceof Error ? err.message : 'Something went wrong',
    }
  }
}

