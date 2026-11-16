/**
 * Leave day counting (outline).
 *
 * Counts working days in a request, skipping weekends and company holidays, with half days.
 * The full implementation is in our private repository.
 */

export interface LeaveRequestInput {
  startDate: string; // yyyy-mm-dd
  endDate: string;
  halfDayEnd: boolean;
}

export function workingDays(_request: LeaveRequestInput, _holidays: ReadonlySet<string>): number {
  throw new Error('Implementation available in the private Clockwell repository.');
}
