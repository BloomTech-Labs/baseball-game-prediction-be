exports.seed = function(knex) {
  // Inserts seed entries
  return knex("teams").insert([
    {
      team_id: 1,
      team_name: "Colorado Rockies",
      league: "NL",
      division: "West",
      logo: null,
      abbreviation: "COL",
      manager: "Bud Black",
      game_count: 0
    },
    {
      team_id: 2,
      team_name: "Arizona Diamondbacks",
      league: "NL",
      division: "West",
      logo: null,
      abbreviation: "ARI",
      manager: "Torey Lovullo",
      game_count: 0
    },
    {
      team_id: 3,
      team_name: "Los Angeles Dodgers",
      league: "NL",
      division: "West",
      logo: null,
      abbreviation: "LAD",
      manager: "Dave Roberts",
      game_count: 0
    },
    {
      team_id: 4,
      team_name: "San Diego Padres",
      league: "NL",
      division: "West",
      logo: null,
      abbreviation: "SD",
      manager: "Jayce Tingler",
      game_count: 0
    },
    {
      team_id: 5,
      team_name: "San Francisco Giants",
      league: "NL",
      division: "West",
      logo: null,
      abbreviation: "SF",
      manager: "vacant",
      game_count: 0
    },
    {
      team_id: 6,
      team_name: "Chicago Cubs",
      league: "NL",
      division: "Central",
      logo: null,
      abbreviation: "CHC",
      manager: "David Ross",
      game_count: 0
    },
    {
      team_id: 7,
      team_name: "Cincinnati Reds",
      league: "NL",
      division: "Central",
      logo: null,
      abbreviation: "CIN",
      manager: "David Bell",
      game_count: 0
    },
    {
      team_id: 8,
      team_name: "Milwaukee Brewers",
      league: "NL",
      division: "Central",
      logo: null,
      abbreviation: "MIL",
      manager: "Craig Counsell",
      game_count: 0
    },
    {
      team_id: 9,
      team_name: "Pittsburgh Pirates",
      league: "NL",
      division: "Central",
      logo: null,
      abbreviation: "PIT",
      manager: "vacant",
      game_count: 0
    },
    {
      team_id: 10,
      team_name: "St. Louis Cardinals",
      league: "NL",
      division: "Central",
      logo: null,
      abbreviation: "STL",
      manager: "Mike Shildt",
      game_count: 0
    },
    {
      team_id: 11,
      team_name: "Atlanta Braves",
      league: "NL",
      division: "East",
      logo: null,
      abbreviation: "ATL",
      manager: "Brian Snitker",
      game_count: 0
    },
    {
      team_id: 12,
      team_name: "Miami Marlins",
      league: "NL",
      division: "East",
      logo: null,
      abbreviation: "MIA",
      manager: "Don Mattingly",
      game_count: 0
    },
    {
      team_id: 13,
      team_name: "New York Mets",
      league: "NL",
      division: "East",
      logo: null,
      abbreviation: "NYM",
      manager: "Carlos Beltran",
      game_count: 0
    },
    {
      team_id: 14,
      team_name: "Philadelphia Phillies",
      league: "NL",
      division: "East",
      logo: null,
      abbreviation: "PHI",
      manager: "Joe Girardi",
      game_count: 0
    },
    {
      team_id: 15,
      team_name: "Washington Nationals",
      league: "NL",
      division: "East",
      logo: null,
      abbreviation: "WAS",
      manager: "Dave Martinez",
      game_count: 0
    },
    {
      team_id: 16,
      team_name: "Houston Astros",
      league: "AL",
      division: "West",
      logo: null,
      abbreviation: "HOU",
      manager: "A.J. Hinch",
      game_count: 0
    },
    {
      team_id: 17,
      team_name: "Los Angeles Angels",
      league: "AL",
      division: "West",
      logo: null,
      abbreviation: "LAA",
      manager: "Joe Maddon",
      game_count: 0
    },
    {
      team_id: 18,
      team_name: "Oakland Athletics",
      league: "AL",
      division: "West",
      logo: null,
      abbreviation: "OAK",
      manager: "Bob Melvin",
      game_count: 0
    },
    {
      team_id: 19,
      team_name: "Seattle Mariners",
      league: "AL",
      division: "West",
      logo: null,
      abbreviation: "SEA",
      manager: "Scott Servais",
      game_count: 0
    },
    {
      team_id: 20,
      team_name: "Texas Rangers",
      league: "AL",
      division: "West",
      logo: null,
      abbreviation: "TEX",
      manager: "Chris Woodward",
      game_count: 0
    },
    {
      team_id: 21,
      team_name: "Chicago White Sox",
      league: "AL",
      division: "Central",
      logo: null,
      abbreviation: "CWS",
      manager: "Rick Renteria",
      game_count: 0
    },
    {
      team_id: 22,
      team_name: "Cleveland Indians",
      league: "AL",
      division: "Central",
      logo: null,
      abbreviation: "CLE",
      manager: "Terry Francona",
      game_count: 0
    },
    {
      team_id: 23,
      team_name: "Detroit Tigers",
      league: "AL",
      division: "Central",
      logo: null,
      abbreviation: "DET",
      manager: "Ron Gardenhire",
      game_count: 0
    },
    {
      team_id: 24,
      team_name: "Kansas City Royals",
      league: "AL",
      division: "Central",
      logo: null,
      abbreviation: "KC",
      manager: "Mike Matheny",
      game_count: 0
    },
    {
      team_id: 25,
      team_name: "Minnesota Twins",
      league: "AL",
      division: "Central",
      logo: null,
      abbreviation: "MIN",
      manager: "Rocco Baldelli",
      game_count: 0
    },
    {
      team_id: 26,
      team_name: "Baltimore Orioles",
      league: "AL",
      division: "East",
      logo: null,
      abbreviation: "BAL",
      manager: "Brandon Hyde",
      game_count: 0
    },
    {
      team_id: 27,
      team_name: "Boston Red Sox",
      league: "AL",
      division: "East",
      logo: null,
      abbreviation: "BOS",
      manager: " Alex Cora",
      game_count: 0
    },
    {
      team_id: 28,
      team_name: "New York Yankees",
      league: "AL",
      division: "East",
      logo: null,
      abbreviation: "NYY",
      manager: "Aaron Boone",
      game_count: 0
    },
    {
      team_id: 29,
      team_name: "Tampa Bay Rays",
      league: "AL",
      division: "East",
      logo: null,
      abbreviation: "TB",
      manager: "Kevin Cash",
      game_count: 0
    },
    {
      team_id: 30,
      team_name: "Toronto Blue Jays",
      league: "AL",
      division: "East",
      logo: null,
      abbreviation: "TOR",
      manager: "Charlie Montoyo",
      game_count: 0
    }
  ]);
};
