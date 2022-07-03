export function PubData() {
  var pubInfo = [
    {
      pic: require('@/assets/pictures/cxm2021.png'),
      title: "Neighbor-Vote: Improving Monocular 3D Object Detection through Neighbor Distance Voting",
      author: "Xiaomeng Chu, Jiajun Deng, Yao Li, Zhenxun Yuan, Yanyong Zhang, Jianmin Ji, Yu Zhang",
      meeting: "ACM Multimedia 2021",
      doi: "",
      video: "",
      code: "https://github.com/cxmomo/Neighbor-Vote",
      abstract: `As cameras are increasingly deployed in new application domains such as autonomous driving, performing 3D object detection on monocular images becomes an important task for visual scene understanding. Recent advances on monocular 3D object detection mainly rely on the “pseudo-LiDAR” generation, which performs monocular depth estimation and lifts the 2D pixels to pseudo 3D points. However, depth estimation from monocular images, due to its poor accuracy, leads to inevitable position shift of pseudo-LiDAR points within the object. Therefore, the predicted bounding boxes may suffer from inaccurate location and deformed shape. In this paper, we present a novel neighbor-voting method that incorporates neighbor predictions to ameliorate object detection from severely deformed pseudo-LiDAR point clouds. Specifically, each feature point around the object forms their own predictions, and then the “consensus” is achieved through voting. In this way, we can effectively combine the neighbors’ predictions with local prediction and achieve more accurate 3D detection. To further enlarge the difference between the foreground region of interest (ROI) pseudoLiDAR points and the background points, we also encode the ROI prediction scores of 2D foreground pixels into the corresponding pseudo-LiDAR points. We conduct extensive experiments on the KITTI benchmark to validate the merits of our proposed method. Our results on the bird’s eye view detection outperform the state-ofthe-art performance, especially for the “hard" level detection. The code is available at https://github.com/cxmomo/Neighbor-Vote`,
    },
    {
      pic: require('@/assets/pictures/cya2021.png'),
      title: "DRQN-based 3D Obstacle Avoidance with a Limited Field of View",
      author: "Yu‘an Chen, Guangda Chen, Lifan Pan, Jun Ma, Yu Zhang, Yanyong Zhang, and Jianmin Ji*",
      meeting: "IEEE/RSJ Intelligent Robots and Systems conference 2021",
      doi: "",
      video: "",
      code: "",
      abstract: "In this paper, we propose a map-based end-to-end DRL approach for three-dimensional (3D) obstacle avoidance in a partially observed environment, which is applied to achieve autonomous navigation for an indoor mobile robot using a depth camera with a narrow field of view. We first train a neural network with LSTM units in a 3D simulator of mobile robots to approximate the Q-value function in double DRQN. We also use a curriculum learning strategy to accelerate and stabilize the training process. Then we deploy the trained model to a real robot to perform 3D obstacle avoidance in its navigation. We evaluate the proposed approach both in the simulated environment and on a robot in the real world. The experimental results show that the approach is efficient and easy to be deployed, and it performs well for 3D obstacle avoidance with a narrow observation angle, which outperforms other existing DRL-based models by 15.5% on success rate."
    },
    {
      pic: require('@/assets/pictures/dyf2022.png'),
      title: "PFilter: Building Persistent Maps through Feature Filtering for Fastand Accurate LiDAR-based SLAM",
      author: "Yifan Duan, Jie Peng, Yu Zhang, Jianmin Ji* and Yanyong Zhang*",
      meeting: "The 2022 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2022)",
      doi: "",
      video: "",
      code: "",
      abstract: `Simultaneous localization and mapping (SLAM) based on laser sensors has been widely adopted by mobile robots and autonomous vehicles. These SLAM systems are required to support accurate localization with limited computational resources. In particular, point cloud registration, i.e., the process of matching and aligning multiple LiDAR scans collected at multiple locations in a global coordinate framework, has been deemed as the bottleneck step in SLAM. In this paper, we propose a feature filtering algorithm, PFilter, that can filter out invalid features and can thus greatly alleviate this bottleneck. Meanwhile, the overall registration accuracy is also improved due to the carefully curated feature points. 

      In essence, we introduce a metric, p-Index, to measure the persistence level of a feature point by examining how often and how recent the feature point has been detected in the past consecutive frames. In particular, larger p-Index values are assigned to those feature points that have been detected frequently in the near past. We take the viewpoint that persistent feature points correspond to “good” landmarks that contribute to the SLAM accuracy, while non-persistent, i.e., transient, feature points correspond to moving objects or measurement noises and thus should be filtered out. By properly measuring each feature point’s p-Index and only keeping those with high index values, we can improve both the efficiency and accuracy of the registration process. We integrate PFilter into the well-established scan-to-map LiDAR odometry framework, F-LOAM, and evaluate its performance on the KITTI dataset.
      
       The experimental results show that PFilter can remove about 48.4% of the points in the local feature map and reduce feature points in scan by 19.3% on average, which save 20.9% processing time per frame. In the mean time, we improve the accuracy by 9.4.
      `,
    },
    {
      pic: require('@/assets/pictures/ly2022.png'),
      title: "EZFusion: A Close Look at the Integration of LiDAR, Millimeter-wave Radar, and Camera for Accurate 3D Object Detection and Tracking",
      author: "Yao Li, Jiajun Deng, Yu Zhang, Jianmin Ji and Yanyong Zhang",
      meeting: "IEEE ROBOTICS AND AUTOMATION LETTERS, NO. 30, JUNE 2022",
      doi: "",
      video: "",
      code: "",
      abstract: `A recent trend is to combine multiple sensors (i.e., cameras, LiDARs and millimeter-wave Radars) to achieve robust multi-modal perception for autonomous systems such as self-driving vehicles. Although quite a few sensor fusion algorithms have been proposed, some of which are top-ranked on various leaderboards, a systematic study on how to integrate these three types of sensors to develop effective multi-modal 3D object detection and tracking is still missing. Towards this end, we first study the strengths and weaknesses of each data modality, and then compare several different fusion strategies to
      maximize their utility. Finally, based upon the lessons learnt, we propose a simple yet effective multi-modal 3D object detection and tracking framework (namely EZFusion). As demonstrated by extensive experiments on the nuScenes dataset, without fancy network modules, our proposed EZFusion makes remarkable improvements over the LiDAR-only baseline, and achieves comparable performance with the state-of-the-art fusion-based
      methods.
      `,
    },
    {
      pic: require('@/assets/pictures/pj2021.png'),
      title: "Towards an Online RRT-based Path Planning Algorithm for Ackermann-steering Vehicles",
      author: "Jie Peng, Yu’an Chen, Yifan Duan, Yu Zhang, Jianmin Ji* and Yanyong Zhang",
      meeting: "2021 IEEE International Conference on Robotics and Automation (ICRA 2021)",
      doi: "https://ieeexplore.ieee.org/abstract/document/9561207/",
      video: "",
      code: "https://github.com/PengJieb/fastbkrrt",
      abstract: `It is challenging to develop an online path planning algorithm for Ackermann-steering vehicles to find collision-free and kinematically-feasible paths, that is efficient for dense environments, adaptable to various environments, and suitable for environments with narrow passages. In this paper, we propose a kinematically constrained RRT-based path planning algorithm integrating with a trajectory parameter space (TP-space) with three novel improvements to meet the above requirements. In specific, we introduce a new way to choose candidate nodes to expand the tree for an RRT-based algorithm, which can significantly increase the success rate of the expansion and improve the efficiency of the algorithm. We also introduce a procedure to incrementally adjust the step size for the expansion, which enables the algorithm to automatically adapt to various environments. At last, we integrate rapidlyexploring random vines (RRV) with a TP-space to handle kinematic constraints and improve the performance of the algorithm to expand the tree through a narrow passage. We also prove that the algorithm is probabilistic complete and asymptotically near-optimal. An ablation study shows that all three improvements can notably improve the performance of the RRT-based path planning algorithm. We also evaluate the algorithm in various environments. The experimental results show that our algorithm achieves competitive performance compared with the state-of-the-art. The source code is available at https://github.com/PengJieb/fastbkrrt`
    },
    {
      pic: require('@/assets/pictures/wyj2021.png'),
      title: "Multi-Modal 3D Object Detection in Autonomous Driving: A Survey",
      author: "Yingjie Wang∗ · Qiuyu Mao∗ · Hanqi Zhu · Jiajun Deng · Yu Zhang · Jianmin Ji · Houqiang Li · Yanyong Zhang (corresponding author)",
      meeting: "arxiv",
      doi: "https://arxiv.org/pdf/2106.12735.pdf",
      video: "",
      code: "",
      abstract: `The past decade has witnessed the rapid development of autonomous driving systems. However,
      it remains a daunting task to achieve full autonomy, especially when it comes to understanding the everchanging, complex driving scenes. To alleviate the difficulty of perception, self-driving vehicles are usually equipped with a suite of sensors (e.g., cameras, LiDARs), hoping to capture the scenes with overlapping perspectives to minimize blind spots. Fusing these data streams and exploiting their complementary properties is thus rapidly becoming the current trend.
      Nonetheless, combining data that are captured by different sensors with drastically different ranging/imaging mechanisms is not a trivial task; instead, many factors need to be considered and optimized. If not careful, data from one sensor may act as noises to data from another sensor, with even poorer results by fusing them. Thus far, there has been no in-depth guidelines to designing the multi-modal fusion based 3D perception algorithms. To fill in the void and motivate further investigation, this survey conducts a thorough study of tens of recent deep learning based multi-modal 3D detection networks (with a special emphasis on LiDAR-camera fusion), focusing on their fusion stage (i.e., when to fuse), fusion inputs (i.e., what to fuse), and fusion granularity
      (i.e., how to fuse). These important design choices play a critical role in determining the performance of the fusion algorithm. 
      In this survey, we first introduce the background of popular sensors used for self-driving, their data properties, and the corresponding object detection algorithms. Next, we discuss existing datasets that can be used for evaluating multi-modal 3D object detection algorithms. Then we present a review of multi-modal fusion based 3D detection networks, taking a close look at their fusion stage, fusion input and fusion granularity, and how these design choices evolve with time and technology. After the review, we discuss open challenges as well as possible solutions. We hope that this survey can help researchers to get familiar with the field and embark on investigations in the area of multi-modal 3D object detection.
      `
    },
    {
      pic: require('@/assets/pictures/zhq2022.png'),
      title: "VPFNet: Improving 3D Object Detection with Virtual Point based LiDAR and Stereo Data Fusion",
      author: "Hanqi Zhu, Jiajun Deng, Yu Zhang, Jianmin Ji, Qiuyu Mao, Houqiang Li, Yanyong Zhang",
      meeting: "IEEE Transactions on Multimedia 2022",
      doi: "https://arxiv.org/pdf/2111.14382.pdf",
      video: "",
      code: "",
      abstract: `It has been well recognized that fusing the complementary information from depth-aware LiDAR point clouds and semantic-rich stereo images would benefit 3D object detection. Nevertheless, it is not trivial to explore the inherently unnatural interaction between sparse 3D points and dense 2D pixels. To ease this difficulty, the recent proposals generally project the 3D points onto the 2D image plane to sample the image data and then aggregate the data at the points. However, this approach often suffers from the mismatch between the resolution of point clouds and RGB images, leading to sub-optimal performance. Specifically, taking the sparse points as the multi-modal data aggregation locations causes severe information loss for high-resolution images, which in turn undermines the effectiveness of multi-sensor fusion. In this paper, we present VPFNet—a new architecture that cleverly aligns and aggregates the point cloud and image data at the ‘virtual’ points. Particularly, with their density lying between that of the 3D points and 2D pixels, the virtual points can nicely bridge the resolution gap between the two sensors, and thus preserve more information for processing. Moreover, we also investigate the data augmentation techniques that can be applied to both point clouds and RGB images, as the data augmentation has made non-negligible contribution towards 3D object detectors to date. We have conducted extensive experiments on KITTI dataset, and have observed good performance compared to the state-of-the-art methods. Remarkably, our VPFNet achieves 83.21% moderate AP3D and 91.86% moderate APBEV on the KITTI test set, ranking the 1st since May 21th, 2021. The network design also takes computation efficiency into consideration – we can achieve a FPS of 15 on a single NVIDIA RTX 2080Ti GPU.`
    },
  ];
  return pubInfo;
}