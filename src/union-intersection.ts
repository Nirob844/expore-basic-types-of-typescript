//union

type NoobDeveloper = {
    name: string;
}
type JuniorDeveloper = {
    name: string;
    expertise: string;
    experience: number;
}
//enum
enum Level {
    junior = 'junior',
    mid = 'mid',
    senior = 'senior'
}

//intersection

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: Level;
}

const newDeveloper: JuniorDeveloper | NoobDeveloper = {
    name: "Monir Mia",
    expertise: 'react',
    experience: 6
}
const Developer: NextLevelDeveloper = {
    name: "Monir Mia",
    expertise: 'react',
    experience: 6,
    leadershipExperience: 1,
    level: Level.junior,


}

