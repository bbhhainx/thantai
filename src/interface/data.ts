export interface IResultEuro {
  competition_id: string
  competition_logo: string
  competition_name: string
  group_num: number
  id: string
  matches: IMatch[]
  round_num: number
  stage_name: string
  type: number
}
export interface IMatch {
  away_logo: string
  away_name: string
  away_scores: Array<number>
  away_team_id: string
  home_logo: string
  home_name: string
  home_scores: Array<number>
  home_team_id: string
  incidents: string
  live: false
  match_id: string
  match_time: number|string
  mlive: number
  replay: string|null
  status_id: number
  streamerID: number
}
