export interface CheckinTeamList {
    team: string,
    rank: number,
    teamAcronym: string,
    bibStart: number,
    bibEnd: number,
    teamCheckInOK: number,
    teamCheckInSign: string,
    teamCheckInSignDate: string,
    teamCheckInSignCoachData: string,
    schoolStar: number,
    teamRelayList: string
};

export interface CheckinTeamListResult {
    success: boolean,
    message: string,
    result: CheckinTeamList[]

}

export interface CheckinStartlist {
    lastname: string,
    firstname: string,
    nation: string,
    athleteId: string,
    athleteId2: string,
    race: string,
    bib: number,
    team: string,
    status: string,
    statusLive: string
}

export interface CheckinStartlistResult {
    success: boolean,
    message: string,
    result: CheckinStartlist[]
}

export interface Penalitylist {
    bib: number,
    penalityType: string,
    penalityStatus: string,
    penalityAdd: string,
    penalityDone: string
}

export interface PenalitylistResult {
    success: boolean,
    message: string,
    result: Penalitylist[]
}


export interface AthleteList {
    lastname: string,
    firstname: string,
    nation: string
    race: string,
    bib: number,
    team: string,
    displayBtn: boolean
}

export interface AthleteListResult {
    success: boolean,
    message: string,
    result: AthleteList[]
}

export interface PenaltyListOfEvent{
  eventId : number,
  penalityId : number,
  athleteId : number,
  race : string,
  bib : number,
  penalityType : string,
  penalityStatus : string,
}

/**
 * For the button StartList
 * **/
export interface StartListOfEvent {
  team : string
  bib : number,
  nation : string,
  nationPict : string
  lastname : string,
  firstname : string,
  athleteType : string
  sponsor : string,
  categoryRef : string
}

export interface StartListResult {
  result : StartListOfEvent[]
}

/**
 * For the button Scratch
 * **/
export interface ResultIndivEvent {
  rank : number,
  lastname : string,
  firstname : string,
  time : number,
  rankSex : number,
  rankCat : number,
  bib : number,
  team : string,
  nation : string,
  nationPict : string
}

export class ResultIndivResult {
  result : ResultIndivEvent[]
}

/**
 * For the button Etape
 * **/
export interface ResultTeamEvent {
  rank : number,
  point : number,
  team : string,
  athlete1_name : string,
  athlete1_point : number,
  athlete1_time : string,
  athlete2_name : string,
  athlete2_point : number,
  athlete2_time : string,
  athlete3_name : string,
  athlete3_point : number,
  athlete3_time : string
}

export interface ResultTeamResult {
  result : ResultTeamEvent[]
}

/**
 * For the button general
 * **/
export interface GeneralRankingEvent {
  rank : number,
  sport : string,
  race : string,
  point : number,
  team : string,
  step1_rank : number,
  step1_point : number,
  step2_rank : number,
  step2_point : number,
  step3_rank : number,
  step3_point : number,
  step4_rank : number,
  step4_point : number,
  step5_rank : number,
  step5_point : number,
  bibStart : number,
  bibEnd : number
}

export interface GeneralRankingResult{
  result : GeneralRankingEvent[]
}

export interface Athletes {
  team : string,
  lastname : string,
  firstname : string,
  athleteType : string,
  nation : string,
  nationPict : string,
  rank : number,
  point : number,
  bib : number,
  race : string,
  sponsor : string,
  categoryRef : string
}

export interface Teams {
  team : string,
  rank : number,
  point : number
  lastname : string,
  firstname : string,
  athleteType : string,
  nation : string,
  nationPict : string,
  bib : number,
  race : string
  sponsor : string,
  categoryRef : string
}

export interface TeamsResult {
  result : Teams[]
}
export interface AthletesResult {
  result : Athletes[]
}

export interface WeatherEvent {
  weatherIcon : string,
  weatherLabel : string,
  airT : string,
  waterT : string,
}

export interface RaceListEvent {
  race : string,
  raceRef : string,
  raceLabel : string
}
