import type { CollectionConfig } from "payload";

export const Bookings: CollectionConfig = {
  slug: "bookings",
  admin: {
    useAsTitle: "patientName",
    defaultColumns: ["patientName", "service", "date", "status", "createdAt"],
    description: "Manage patient appointment bookings",
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
      name: "patientName",
      label: "Patient Name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      required: true,
    },
    // ── Appointment details ──────────────────────────────
    {
      name: "service",
      type: "select",
      required: true,
      options: [
        { label: "Family Planning", value: "family-planning" },
        { label: "Antenatal Care", value: "antenatal-care" },
        { label: "Birth Center", value: "birth-center" },
        { label: "Postnatal Care", value: "postnatal-care" },
        { label: "Baby Wellness & Immunization", value: "baby-wellness" },
        { label: "IV Drip Therapy", value: "iv-drip-therapy" },
      ],
    },
    {
      name: "date",
      label: "Appointment Date",
      type: "date",
      required: true,
      admin: {
        
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "dd MMM yyyy",
          
        },
      },
    },
    {
      name: "time",
      label: "Appointment Time",
      type: "select",
      required: true,
      options: [
        { label: "08:00 AM", value: "08:00" },
        { label: "08:30 AM", value: "08:30" },
        { label: "09:00 AM", value: "09:00" },
        { label: "09:30 AM", value: "09:30" },
        { label: "10:00 AM", value: "10:00" },
        { label: "10:30 AM", value: "10:30" },
        { label: "11:00 AM", value: "11:00" },
        { label: "11:30 AM", value: "11:30" },
        { label: "12:00 PM", value: "12:00" },
        { label: "12:30 PM", value: "12:30" },
        { label: "01:00 PM", value: "13:00" },
        { label: "01:30 PM", value: "13:30" },
        { label: "02:00 PM", value: "14:00" },
        { label: "02:30 PM", value: "14:30" },
        { label: "03:00 PM", value: "15:00" },
        { label: "03:30 PM", value: "15:30" },
        { label: "04:00 PM", value: "16:00" },
        { label: "04:30 PM", value: "16:30" },
        { label: "05:00 PM", value: "17:00" },
      ],
    },
    {
      name: "notes",
      label: "Additional Notes",
      type: "textarea",
      admin: {
        description: "Any additional information or special requests",
      },
    },
    // ── Admin / status ───────────────────────────────────
    {
      name: "status",
      type: "select",
      defaultValue: "pending",
      options: [
        { label: "Pending", value: "pending" },
        { label: "Confirmed", value: "confirmed" },
        { label: "Cancelled", value: "cancelled" },
        { label: "Completed", value: "completed" },
      ],
      admin: {
        position: "sidebar",
      },
    },
  ],
};
