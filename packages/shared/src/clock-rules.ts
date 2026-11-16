/**
 * Clock-in rules (outline).
 *
 * In Clockwell these rules run identically in the phone app (to preview the result) and on the
 * server (which records it). The full implementation is in our private repository.
 */

export type WorkMode = 'onsite' | 'hybrid' | 'remote' | 'field';
export type AttendanceStatus = 'on_time' | 'grace' | 'late';
export type AttendanceFlag = 'outside_zone' | 'gps_weak' | 'sent_late' | 'not_home_day';

export interface Zone {
  id: string;
  kind: 'site' | 'home';
  lat: number;
  lng: number;
  radiusM: number;
}

export interface EffectiveRules {
  workMode: WorkMode;
  timezone: string;
  shiftStart: string; // "HH:MM"
  graceMinutes: number; // late leeway set by HR
  homeDays: readonly number[];
  gpsMarginM?: number; // allowance for phone GPS error
}

export interface ClockEvaluation {
  place: 'site' | 'home' | 'outside';
  zoneId: string | null;
  distanceM: number | null;
  workDate: string;
  status: AttendanceStatus;
  flags: AttendanceFlag[];
}

/** Where the person is, whether they are on time, and what HR should look at. */
export function evaluateClockIn(
  _input: { serverTime: Date; position: { lat: number; lng: number }; accuracyM: number; sites: readonly Zone[] },
  _rules: EffectiveRules,
): ClockEvaluation {
  throw new Error('Implementation available in the private Clockwell repository.');
}

/** True when a clock-in must be refused because the person is outside every site boundary. */
export function clockInBlocked(_place: ClockEvaluation['place'], _mode: WorkMode, _blockOutside: boolean): boolean {
  throw new Error('Implementation available in the private Clockwell repository.');
}
