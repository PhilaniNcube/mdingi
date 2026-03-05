import type { CollectionConfig } from 'payload'

export const Bookings: CollectionConfig = {
  slug: 'bookings',
  admin: {
    useAsTitle: 'patientName',
    defaultColumns: ['patientName', 'service', 'date', 'status', 'createdAt'],
    description: 'Manage patient appointment bookings',
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: () => true, // allow public form submissions
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    // ── Patient information ──────────────────────────────
    {
      name: 'patientName',
      label: 'Patient Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    // ── Appointment details ──────────────────────────────
    {
      name: 'service',
      type: 'select',
      required: true,
      options: [
        { label: 'Family Planning', value: 'family-planning' },
        { label: 'Antenatal Care', value: 'antenatal-care' },
        { label: 'Birth Center', value: 'birth-center' },
        { label: 'Postnatal Care', value: 'postnatal-care' },
        { label: 'Baby Wellness & Immunization', value: 'baby-wellness' },
        { label: 'IV Drip Therapy', value: 'iv-drip-therapy' },
      ],
    },
    {
      name: 'date',
      label: 'Appointment Date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'notes',
      label: 'Additional Notes',
      type: 'textarea',
      admin: {
        description: 'Any additional information or special requests',
      },
    },
    // ── Admin / status ───────────────────────────────────
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'Completed', value: 'completed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  
  ],
}
