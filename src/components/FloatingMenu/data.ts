export interface GithubProfile {
    username: string;
    avatarUrl: string;
    displayName: string;
    bio: string;
    githubUrl: string;
}

export interface LinkedinProfile {
    displayName: string;
    linkedinUrl: string;
    avatarUrl: string;
}

export interface ProfileData {
    github: GithubProfile[];
    linkedin: LinkedinProfile[];
}

export interface UserData {
    profile: {
        github: GithubProfile[];
        linkedin: LinkedinProfile[];
    };
}

const userData: UserData = {
    profile: {
        github: [
            {
                username: "jakubzengota",
                avatarUrl: "https://avatars.githubusercontent.com/u/72916687?v=4",
                displayName: "Jakub Zengota",
                bio: "Frontend Developer",
                githubUrl: "https://github.com/jakubzengota"
            },
            {
                username: "asztandar",
                avatarUrl: "https://avatars.githubusercontent.com/u/10097355?v=4",
                displayName: "Adam Sztandar",
                bio: "Frontend Developer",
                githubUrl: "https://github.com/asztandar"
            },
            {
                username: "krystianZak7",
                avatarUrl: "https://avatars.githubusercontent.com/u/147444905?v=4",
                displayName: "Krystian Zak",
                bio: "Analityk",
                githubUrl: "https://github.com/krystianZak7"
            }
        ],
        linkedin: [
            {
                displayName: "Jakub Zengota",
                linkedinUrl: "",
                avatarUrl: "https://avatars.githubusercontent.com/u/72916687?v=4"
            },
            {
                displayName: "Adam Sztandar",
                linkedinUrl: "https://www.linkedin.com/in/adam-sztandar-03a7a0238/",
                avatarUrl: "https://avatars.githubusercontent.com/u/10097355?v=4"
            },
            {
                displayName: "Krystian Zak",
                linkedinUrl: "",
                avatarUrl: "https://avatars.githubusercontent.com/u/147444905?v=4",
            },
            
        ]
    }
};
export default userData;