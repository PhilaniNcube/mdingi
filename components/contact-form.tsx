"use client"

import { useActionState, useState } from "react"
import { format } from "date-fns"
import { createBooking, type BookingState } from "@/actions/bookings"
import { timeSlots, timeSlotLabels } from "@/schemas/booking"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field"
import { CalendarIcon, CheckCircle, Clock, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  { value: "family-planning", label: "Family Planning" },
  { value: "antenatal-care", label: "Antenatal Care" },
  { value: "birth-center", label: "Birth Centre / Home Birth" },
  { value: "postnatal-care", label: "Postnatal Care" },
  { value: "baby-wellness", label: "Baby Wellness & Immunization" },
  { value: "iv-drip-therapy", label: "IV Drip Therapy" },
]

export function ContactForm() {
  const [state, formAction, pending] = useActionState<BookingState, FormData>(
    createBooking,
    null,
  )
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [dateOpen, setDateOpen] = useState(false)

  if (state?.success) {
    return (
      <div className="text-center py-12">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">
          Booking Submitted Successfully
        </h3>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          We have received your booking request and will confirm your appointment
          within 24 hours. If your matter is urgent, please call us directly.
        </p>
      </div>
    )
  }

  const fieldErrors = state?.success === false ? state.fieldErrors : undefined

  return (
    <form action={formAction} className="space-y-6">
      {state?.success === false && !state.fieldErrors && (
        <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field data-invalid={!!fieldErrors?.patientName}>
          <FieldLabel htmlFor="patientName">Full Name</FieldLabel>
          <FieldContent>
            <Input
              id="patientName"
              name="patientName"
              placeholder="Enter your full name"
            />
            <FieldError>
              {fieldErrors?.patientName?.[0]}
            </FieldError>
          </FieldContent>
        </Field>

        <Field data-invalid={!!fieldErrors?.phone}>
          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
          <FieldContent>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+27 00 000 0000"
            />
            <FieldError>
              {fieldErrors?.phone?.[0]}
            </FieldError>
          </FieldContent>
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field data-invalid={!!fieldErrors?.email}>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <FieldContent>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
            />
            <FieldError>
              {fieldErrors?.email?.[0]}
            </FieldError>
          </FieldContent>
        </Field>

        <Field data-invalid={!!fieldErrors?.service}>
          <FieldLabel htmlFor="service">Service of Interest</FieldLabel>
          <FieldContent>
            <Select name="service">
              <SelectTrigger id="service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service.value} value={service.value}>
                    {service.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError>
              {fieldErrors?.service?.[0]}
            </FieldError>
          </FieldContent>
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field data-invalid={!!fieldErrors?.date}>
          <FieldLabel>Appointment Date</FieldLabel>
          <FieldContent>
            <input type="hidden" name="date" value={selectedDate ? format(selectedDate, 'yyyy-MM-dd') : ''} />
            <Popover open={dateOpen} onOpenChange={setDateOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(day) => {
                    setSelectedDate(day)
                    setDateOpen(false)
                  }}
                  disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                />
              </PopoverContent>
            </Popover>
            <FieldError>
              {fieldErrors?.date?.[0]}
            </FieldError>
          </FieldContent>
        </Field>

        <Field data-invalid={!!fieldErrors?.time}>
          <FieldLabel htmlFor="time">Appointment Time</FieldLabel>
          <FieldContent>
            <Select name="time">
              <SelectTrigger id="time">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <SelectValue placeholder="Pick a time" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {timeSlotLabels[slot]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FieldError>
              {fieldErrors?.time?.[0]}
            </FieldError>
          </FieldContent>
        </Field>
      </div>

      <Field data-invalid={!!fieldErrors?.notes}>
        <FieldLabel htmlFor="notes">Additional Notes</FieldLabel>
        <FieldContent>
          <Textarea
            id="notes"
            name="notes"
            placeholder="Tell us about any special requirements or questions..."
            rows={5}
          />
          <FieldError>
            {fieldErrors?.notes?.[0]}
          </FieldError>
        </FieldContent>
      </Field>

      <Button type="submit" size="lg" className="w-full" disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Book Appointment"
        )}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        By submitting this form, you agree to be contacted regarding your
        appointment.
      </p>
    </form>
  )
}
