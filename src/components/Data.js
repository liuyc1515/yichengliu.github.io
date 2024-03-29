var conferencePaper = [
    {
        title: "Synpose: A Large-Scale and Densely Annotated Synthetic Dataset for Human Pose Estimation in Classroom",
        paperLink: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9747453",
        authors: [
            "Zefang Yu",
            "Yangcheng Li",
            "Yicheng Liu",
            "Ting Liu",
            "Yuzhuo Fu"
        ],
        conference: "International Conference on Acoustics, Speech and Signal Processing (ICASSP 22)",
        links: [
            {oneLink: "https://ieeexplore.ieee.org/document/9747453", oneContent: "[arXiv]"},
            {oneLink: "https://yuzefang96.github.io/SynPose/", oneContent: "[Blog]"},
        ],
        abstract: "Deep learning-based methods for human pose estimation require large volumes of training data to achieve superior performance. However, data acquisition in classroom environments raises privacy concerns, which will undoubtedly hinder the development of the latest deep learning techniques in education domain. Due to the absence of large, richly annotated classroom datasets, research into classroom observation has had to be done by manually collecting and annotating datasets. Unfortunately, the annotation of such data is time-consuming and challenging in over-crowded classrooms. To break through these limitations, we open source SynPose, a large, densely labeled synthetic dataset specifically designed for crowded human pose estimation in classroom and meeting scenarios. Moreover, we propose a novel CTGAN to bridge the domain gap. Comprehensive experiments on real-world classroom images show that our proposed dataset and method deliver important performance benefits compared to existing datasets, revealing the potential of SynPose for future studies."
    },
    {
        title: "CBLab: Scalable Traffic Simulation with Enriched Data Supporting",
        paperLink: "https://arxiv.org/pdf/2210.00896",
        authors: [
            "Chumeng Liang",
            "Zherui Huang", 
            "Yicheng Liu", 
            "Zhanyu Liu", 
            "Guanjie Zheng", 
            "Hanyuan Shi", 
            "Yuhao Du", 
            "Fuliang Li", 
            "Zhenhui Li"
        ],
        conference: "ACM Special Interest Group on Knowledge Discovery and Data Mining (SIGKDD 23)",
        links: [
            {oneLink: "https://dl.acm.org/doi/abs/10.1145/3580305.3599789", oneContent: "[arXiv]"},
            {oneLink: "https://cblab-documentation.readthedocs.io/en/latest/content/cbengine/cbengine.html", oneContent: "[Blog]"},
            {oneLink: "https://github.com/CityBrainLab/CityBrainLab", oneContent: "[Code]"},
        ],
        abstract: "Traffic simulation provides interactive data for the optimization of traffic policies. However, existing traffic simulators are limited by their lack of scalability and shortage in input data, which prevents them from generating interactive data from traffic simulation in the scenarios of real large-scale city road networks. In this paper, we present City Brain Lab, a toolkit for scalable traffic simulation. CBLab is consist of three components: CBEngine, CBData, and CBScenario. CBEngine is a highly efficient simulators supporting large scale traffic simulation. CBData includes a traffic dataset with road network data of 100 cities all around the world. We also develop a pipeline to conduct one-click transformation from raw road networks to input data of our traffic simulation. Combining CBEngine and CBData allows researchers to run scalable traffic simulation in the road network of real large-scale cities. Based on that, CBScenario implements an interactive environment and several baseline methods for two scenarios of traffic policies respectively, with which traffic policies adaptable for large-scale urban traffic can be trained and tuned. To the best of our knowledge, CBLab is the first infrastructure supporting traffic policy optimization on large-scale urban scenarios."
    }
];

var arxivPaper = [
    
];

var researchExperience = [
    {
        institution: "University of Michigan, OrderLab, advised by Ryan Huang",
        workings: [
            "Develop an auto cancellation system in Java."
        ]
    },
    {
        institution: "Shanghai Jiao Tong University, Institution of Parallel And Distributed System (IPADS), advised by Jinyu Gu",
        workings: [
            "Develop an autopilot system.",
            "Develop a sanitizer system in institution's own micro kernel operating system.",
            "Research in container security."
        ]
    },
    {
        institution: "Shanghai Jiao Tong University, John Hopcoft Institution, advised by Guanjie Zheng",
        workings: [
            "Opensource an large scale traffic simulator.",
            "Research in offline reinforcement learning under traffic signal control (TSC) problem.",
            "Research in an general proposed large traffic flow model."
        ]
    },
    {
        institution: "Shanghai Jiao Tong University, Intelectual Computer Architecture Technology, advised by Zefang Yu",
        workings: [
            "Develop an automated human pose estimation (HPE) dataset collector."
        ]
    }
];

var projects = [
    {
        name: "ChCore",
        ref: "https://gitee.com/ipads-lab/chcore-lab",
        description: "A microkernel operating system. As one of the contributors, I add a sanitizer into it to dynamically detect bugs like out-of-bound and use-after-free."
    },
    {
        name: "Parabox for Shell",
        ref: "https://github.com/liuyc1515/Parabox",
        description: "Inspired by the game Parabox and here is the cli version of Parabox, which contains most of the functions of the origin Parabox. Different maps and starting UI are to be finished in the future. Using w, a, s, d to control player (P) and try pushing the block to the target (T), there are many different kinds of blocks and each has different interaction logic."
    },
]

export {
    conferencePaper, arxivPaper, researchExperience, projects
};
