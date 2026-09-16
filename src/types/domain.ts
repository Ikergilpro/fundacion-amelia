/**
 * Entidades previstas para tablas de Supabase.
 * El cliente ya existe en src/lib/supabase/client.ts.
 * Las tablas no se crean todavía: el sitio sigue siendo informativo.
 */
export type FutureUserRole =
  | "family"
  | "professional"
  | "admin"
  | "donor"
  | "partner";

export interface FutureUser {
  id: string;
  role: FutureUserRole;
  email: string;
}

export interface FutureFamily {
  id: string;
  userId: string;
}

export interface FutureBeneficiary {
  id: string;
  familyId: string;
}

export interface FutureProfessional {
  id: string;
  userId: string;
  specialty: string;
}

export interface FutureProgramRecord {
  id: string;
  slug: string;
}

export interface FutureApplication {
  id: string;
  familyId: string;
  programId: string;
  status: "draft" | "submitted" | "review" | "accepted" | "declined";
}

export interface FutureSubsidy {
  id: string;
  applicationId: string;
}

export interface FutureCase {
  id: string;
  beneficiaryId: string;
}

export interface FutureCaseGoal {
  id: string;
  caseId: string;
  title: string;
}

export interface FutureAppointment {
  id: string;
  caseId: string;
  scheduledAt: string;
}

export interface FutureEvaluation {
  id: string;
  caseId: string;
}

export interface FutureDonation {
  id: string;
  partnerId?: string;
  amount?: number;
}

export interface FuturePartner {
  id: string;
  name: string;
}

export interface FutureDocument {
  id: string;
  ownerType: string;
  ownerId: string;
}
