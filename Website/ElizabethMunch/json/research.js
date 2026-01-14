var researchJSON = {
    "paperInfo": [
        {
            "abstract": "The Euler characteristic transform (ECT) is a simple to define yet powerful representation of shape. The idea is to encode an embedded shape using sub-level sets of a a function defined based on a given direction, and then returning the Euler characteristics of these sublevel sets. Because the ECT has been shown to be injective on the space of embedded simplicial complexes, it has been used for applications spanning a range of disciplines, including plant morphology and protein structural analysis. In this survey article, we present a comprehensive overview of the Euler characteristic transform, highlighting the main idea on a simple leaf example, and surveying its its key concepts, theoretical foundations, and available applications.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2310.10395",
            "authors": "Elizabeth Munch",
            "bibtex": "@article{Munch2023,<br> archiveprefix = {arXiv},<br> author = {Munch, Elizabeth},<br> copyright = {arXiv.org perpetual, non-exclusive license},<br> doi = {10.1080/00029890.2024.2409616},<br> eprint = {2310.10395},<br> journal = {The American Mathematical Monthly},<br> number = {1},<br> pages = {15--25},<br> primaryclass = {cs.CG},<br> publisher = {Taylor \\& Francis},<br> title = {An Invitation to the Euler Characteristic Transform},<br> volume = {132},<br> year = {2025}<br>}<br>",
            "collapseLabel": "Munch2023",
            "date": 2025,
            "image": "../img/Munch2023.png",
            "keywords": [
                "Intro",
                "DirTrans"
            ],
            "publishedLink": "https://doi.org/10.1080/00029890.2024.2409616",
            "title": "An Invitation to the Euler Characteristic Transform",
            "venue": "The American Mathematical Monthly"
        },
        {
            "abstract": "Mapper graphs are a widely used tool in topological data analysis and visualization. They can be viewed as discrete approximations of Reeb graphs, offering insight into the shape and connectivity of complex data. Given a high-dimensional point cloud $\\mathbbX$ equipped with a function $f: \\mathbbX \\to \\mathbbR$, a mapper graph provides a summary of the topological structure of $\\mathbbX$ induced by $f$, where each node represents a local neighborhood, and edges connect nodes whose corresponding neighborhoods overlap. Our focus is the interleaving distance for mapper graphs, arising from a discretization of the version for Reeb graphs, which is NP-hard to compute. This distance quantifies the similarity between two mapper graphs by measuring the extent to which they must be ``stretched\" to become comparable. Recent work introduced a loss function that provides an upper bound on the interleaving distance for mapper graphs, which evaluates how far a given assignment is from being a true interleaving. Finding the loss is computationally tractable, offering a practical way to estimate the distance. In this paper, we employ a categorical formulation of mapper graphs and develop the first framework for computing the associated loss function. Since the quality of the bound depends on the chosen assignment, we optimize this loss function by formulating the problem of finding the best assignment as an integer linear programming problem. To evaluate the effectiveness of our optimization, we apply it to small mapper graphs where the interleaving distance is known, demonstrating that the optimized upper bound successfully matches the interleaving distance in these cases. Additionally, we conduct an experiment on the MPEG-7 dataset, computing the pairwise optimal loss on a collection of mapper graphs derived from images and leveraging the distance bound for image classification.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2504.03865",
            "authors": "Erin Wolf Chambers, Ishika Ghosh, Elizabeth Munch, Sarah Percival, and Bei Wang",
            "bibtex": "@article{Chambers2025,<br> archiveprefix = {arXiv},<br> author = {Chambers, Erin Wolf and Ghosh, Ishika and Munch, Elizabeth and Percival, Sarah and Wang, Bei},<br> copyright = {arXiv.org perpetual, non-exclusive license},<br> doi = {10.48550/ARXIV.2504.03865},<br> eprint = {2504.03865},<br> month = {April},<br> primaryclass = {cs.CG},<br> publisher = {arXiv},<br> title = {Towards an Optimal Bound for the Interleaving Distance on Mapper Graphs},<br> year = {2025}<br>}<br>",
            "collapseLabel": "Chambers2025",
            "date": 2025,
            "image": "../img/Chambers2025.png",
            "keywords": [
                "Graph",
                "Interleaving"
            ],
            "title": "Towards an Optimal Bound for the Interleaving Distance on Mapper Graphs",
            "venue": "arXiv:2504.03865"
        },
        {
            "abstract": "The kinetic data structure (KDS) framework is a powerful tool for maintaining various geometric configurations of continuously moving objects. In this work, we introduce the kinetic hourglass, a novel KDS implementation designed to compute the bottleneck distance for geometric matching problems. We detail the events and updates required for handling general graphs, accompanied by a complexity analysis. Furthermore, we demonstrate the utility of the kinetic hourglass by applying it to compute the bottleneck distance between two persistent homology transforms (PHTs) derived from shapes in $\\mathbbR^2$, which are topological summaries obtained by computing persistent homology from every direction in $\\mathbbS^1$.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2505.04048",
            "authors": "Elizabeth Munch, Elena Xinyi Wang, and Carola Wenk",
            "bibtex": "@article{Munch2025,<br> archiveprefix = {arXiv},<br> author = {Munch, Elizabeth and Wang, Elena Xinyi and Wenk, Carola},<br> copyright = {Creative Commons Attribution 4.0 International},<br> doi = {10.48550/ARXIV.2505.04048},<br> eprint = {2505.04048},<br> journal = {CCCG2025 - Canadian Conference on Computational Geometry},<br> month = {May},<br> primaryclass = {cs.DS},<br> publisher = {arXiv},<br> title = {The Kinetic Hourglass Data Structure for Computing the Bottleneck Distance of Dynamic Data},<br> url = {https://cccg-wads-2025.eecs.yorku.ca/cccg-papers/7B4.pdf},<br> year = {2025}<br>}<br>",
            "collapseLabel": "Munch2025",
            "date": 2025,
            "image": "../img/Munch2025.png",
            "keywords": [
                "DirTrans",
                "Pers"
            ],
            "publishedLink": "https://doi.org/10.48550/ARXIV.2505.04048",
            "title": "The Kinetic Hourglass Data Structure for Computing the Bottleneck Distance of Dynamic Data",
            "venue": "CCCG2025 - Canadian Conference on Computational Geometry"
        },
        {
            "abstract": "The Euler Characteristic Transform (ECT) is a robust method for shape classification. It takes an embedded shape and, for each direction, computes a piecewise constant function representing the Euler Characteristic of the shape's sublevel sets, which are defined by the height function in that direction. It has applications in TDA inverse problems, such as shape reconstruction, and is also employed with machine learning methodologies. In this paper, we define a distance between the ECTs of two distinct geometric embeddings of the same abstract simplicial complex and provide an upper bound for this distance. The Super Lifted Euler Characteristic Transform (SELECT), a related construction, extends the ECT to scalar fields defined on shapes. We establish a similar distance bound for SELECT, specifically when applied to fields defined on embedded simplicial complexes.",
            "arXivLink": "https://arxiv.org/abs/2506.19991",
            "authors": "Jasmine George, Oscar Lledo Osborn, Elizabeth Munch, Messiah Ridgley, and Elena Xinyi Wang",
            "bibtex": "@article{George2025,<br> archiveprefix = {arXiv},<br> author = {George, Jasmine and Osborn, Oscar Lledo and Munch, Elizabeth and Ridgley, Messiah and Wang, Elena Xinyi},<br> copyright = {arXiv.org perpetual, non-exclusive license},<br> doi = {10.48550/ARXIV.2506.19991},<br> eprint = {2506.19991},<br> month = {June},<br> primaryclass = {cs.CG},<br> publisher = {arXiv},<br> title = {On the Stability of the Euler Characteristic Transform for a Perturbed Embedding},<br> year = {2025}<br>}<br>",
            "collapseLabel": "George2025",
            "date": 2025,
            "keywords": [
                "DirTrans",
                "REU"
            ],
            "title": "On the Stability of the Euler Characteristic Transform for a Perturbed Embedding",
            "venue": "arXiv:2506.19991"
        },
        {
            "abstract": "Directed graphs arise in many applications where computing persistent homology helps to encode the shape and structure of the input information. However, there are only a few ways to turn the directed graph information into an undirected simplicial complex filtration required by the standard persistent homology framework. In this paper, we present a new filtration constructed from a directed graph, called the walk-length filtration. This filtration mirrors the behavior of small walks visiting certain collections of vertices in the directed graph. We show that, while the persistence is not stable under the usual $L_\\infty$-style network distance, a generalized $L_1$-style distance is, indeed, stable. We further provide an algorithm for its computation, and investigate the behavior of this filtration in examples, including cycle networks and synthetic hippocampal networks with a focus on comparison to the often used Dowker filtration.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2506.22263",
            "authors": "David E. Mu\u00f1oz, Elizabeth Munch, and Firas A. Khasawneh",
            "bibtex": "@article{Munoz2025,<br> archiveprefix = {arXiv},<br> author = {Mu\u00f1oz, David E. and Munch, Elizabeth and Khasawneh, Firas A.},<br> copyright = {arXiv.org perpetual, non-exclusive license},<br> doi = {10.48550/ARXIV.2506.22263},<br> eprint = {2506.22263},<br> month = {June},<br> primaryclass = {cs.CG},<br> publisher = {arXiv},<br> title = {The Walk-Length Filtration for Persistent Homology on Weighted Directed Graphs},<br> year = {2025}<br>}<br>",
            "collapseLabel": "Munoz2025",
            "date": 2025,
            "image": "../img/Munoz2025.png",
            "keywords": [
                "Pers"
            ],
            "title": "The Walk-Length Filtration for Persistent Homology on Weighted Directed Graphs",
            "venue": "arXiv:2506.22263"
        },
        {
            "abstract": "A geometric graph is an abstract graph along with an embedding of the graph into the Euclidean plane which can be used to model a wide range of data sets. The ability to compare and cluster such objects is required in a data analysis pipeline, leading to a need for distances or metrics on these objects. In this work, we study the interleaving distance on geometric graphs, where functor representations of data can be compared by finding pairs of natural transformations between them. However, in many cases, particularly those of the set-valued functor variety, computation of the interleaving distance is NP-hard. For this reason, we take inspiration from the work of Robinson to find quality measures for families of maps that do not rise to the level of a natural transformation. Specifically, we call collections $\\phi = \\\\phi_U\\mid U\\$ and $\\psi = \\\\psi_U\\mid U\\$ which do not necessarily form a true interleaving an \\textitassignment. In the case of embedded graphs, we impose a grid structure on the plane, treat this as a poset endowed with the Alexandroff topology $K$, and encode the embedded graph data as functors $F: \\mathbfOpen(K) \\to \\mathbfSet$ where $F(U)$ is the set of connected components of the graph inside of the geometric realization of the set $U$. We then endow the image with the extra structure of a metric space and define a loss function $L(\\phi,\\psi)$ which measures how far the required diagrams of an interleaving are from commuting. Then for a pair of assignments, we use this loss function to bound the interleaving distance, with an eye toward computation and approximation of the distance. We expect these ideas are not only useful in our particular use case of embedded graphs, but can be extended to a larger class of interleaving distance problems where computational complexity creates a barrier to use in practice.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2307.15130",
            "authors": "Erin Wolf Chambers, Elizabeth Munch, Sarah Percival, and Bei Wang",
            "bibtex": "@article{Chambers2025a,<br> archiveprefix = {arXiv},<br> author = {Chambers, Erin Wolf and Munch, Elizabeth and Percival, Sarah and Wang, Bei},<br> copyright = {arXiv.org perpetual, non-exclusive license},<br> doi = {10.1007/s41468-025-00215-x},<br> eprint = {2307.15130},<br> issn = {2367-1734},<br> journal = {Journal of Applied and Computational Topology},<br> month = {July},<br> number = {3},<br> primaryclass = {cs.CG},<br> publisher = {Springer Science and Business Media LLC},<br> title = {Bounding the interleaving distance for mapper graphs with a loss function},<br> volume = {9},<br> year = {2025}<br>}<br>",
            "collapseLabel": "Chambers2025a",
            "date": 2025,
            "image": "../img/Chambers2023a.png",
            "keywords": [
                "Graph",
                "Interleaving"
            ],
            "publishedLink": "https://doi.org/10.1007/s41468-025-00215-x",
            "title": "Bounding the interleaving distance for mapper graphs with a loss function",
            "venue": "Journal of Applied and Computational Topology"
        },
        {
            "abstract": "For deep learning problems on graph-structured data, pooling layers are important for down sampling, reducing computational cost, and to minimize overfitting. We define a pooling layer, nervePool, for data structured as simplicial complexes, which are generalizations of graphs that include higher-dimensional simplices beyond vertices and edges; this structure allows for greater flexibility in modeling higher-order relationships. The proposed simplicial coarsening scheme is built upon partitions of vertices, which allow us to generate hierarchical representations of simplicial complexes, collapsing information in a learned fashion. NervePool builds on the learned vertex cluster assignments and extends to coarsening of higher dimensional simplices in a deterministic fashion. While in practice the pooling operations are computed via a series of matrix operations, the topological motivation is a set-theoretic construction based on unions of stars of simplices and the nerve complex.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2305.06315",
            "authors": "Sarah McGuire Scullen, Ernst R\u00f6ell, Elizabeth Munch, Bastian Rieck, and Matthew Hirn",
            "bibtex": "@article{Scullen2025,<br> archiveprefix = {arXiv},<br> author = {Scullen, Sarah McGuire and R\u00f6ell, Ernst and Munch, Elizabeth and Rieck, Bastian and Hirn, Matthew},<br> copyright = {arXiv.org perpetual, non-exclusive license},<br> doi = {10.48550/ARXIV.2305.06315},<br> eprint = {2305.06315},<br> month = {may},<br> primaryclass = {cs.CG},<br> publisher = {arXiv},<br> title = {NervePool: A Simplicial Pooling Layer},<br> year = {2025}<br>}<br>",
            "collapseLabel": "Scullen2025",
            "date": 2025,
            "image": "../img/McGuire2023.png",
            "keywords": [
                "ML"
            ],
            "title": "NervePool: A Simplicial Pooling Layer",
            "venue": "arXiv:2305.06315"
        },
        {
            "abstract": "Abstract Persian walnuts (Juglans regia L.) are the second most produced and consumed tree nut, with over 2.6 million metric tons produced in the 2022\u20132023 harvest cycle alone. The United States is the second largest producer, accounting for 25\\% of the total global supply. Nonetheless, producers face an ever-growing demand in a more uncertain climate landscape, which requires effective and efficient walnut selection and breeding of new cultivars with increased kernel content and easy-to-open shells. Past and current efforts select for these traits using hand-held calipers and eye-based evaluations. Yet there is plenty of morphology that meets the eye but goes unmeasured, such as the volume of inner air or the convexity of the kernel. Here, we study the shape of walnut fruits based on X-ray computed tomography three-dimensional reconstructions. We compute 49 different morphological phenotypes for 1264 individual nuts comprising 149 accessions. These phenotypes are complemented by traits of breeding interest such as ease of kernel removal and kernel-to-nut weight ratio. Through allometric relationships, relative growth of one tissue to another, we identify possible biophysical constraints at play during development. We explore multiple correlations between all morphological and commercial traits and identify which morphological traits can explain the most variability of commercial traits. We show that using only volume- and thickness-based traits, especially inner air content, we can successfully encode several of the commercial traits.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://doi.org/10.1101/2023.09.26.559651",
            "authors": "Erik J. Am\u00e9zquita, Michelle Y. Quigley, Patrick J. Brown, Elizabeth Munch, and Daniel H. Chitwood",
            "bibtex": "@article{Amezquita2024,<br> author = {Am\u00e9zquita, Erik J. and Quigley, Michelle Y. and Brown, Patrick J. and Munch, Elizabeth and Chitwood, Daniel H.},<br> doi = {10.1002/ppj2.20095},<br> eprint = {10.1101/2023.09.26.559651},<br> eprinttype = {bioRxiv},<br> journal = {The Plant Phenome Journal},<br> month = {sep},<br> number = {1},<br> pages = {e20095},<br> publisher = {Cold Spring Harbor Laboratory},<br> title = {Allometry and volumes in a nutshell: Analyzing walnut morphology using three-dimensional X-ray computed tomography},<br> url = {https://acsess.onlinelibrary.wiley.com/doi/abs/10.1002/ppj2.20095},<br> volume = {7},<br> year = {2024}<br>}<br>",
            "collapseLabel": "Amezquita2024",
            "date": 2024,
            "image": "../img/Amezquita2023.png",
            "keywords": [
                "Plants"
            ],
            "publishedLink": "https://doi.org/10.1002/ppj2.20095",
            "title": "Allometry and volumes in a nutshell: Analyzing walnut morphology using three-dimensional X-ray computed tomography",
            "venue": "The Plant Phenome Journal"
        },
        {
            "abstract": "We explore a novel application of zero-dimensional persistent homology from Topological Data Analysis (TDA) for bracketing zero-crossings of both one-dimensional continuous functions, and uniformly sampled time series. We present an algorithm and show its robustness in the presence of noise for a range of sampling frequencies. In comparison to state-of-the-art software-based methods for finding zeros of a time series, our method generally converges faster, provides higher accuracy, and is capable of finding all the roots in a given interval instead of converging only to one of them. We also present and compare options for automatically setting the persistence threshold parameter that influences the accurate bracketing of the roots.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2301.07703",
            "authors": "Sunia Tanweer, Firas A. Khasawneh, and Elizabeth Munch",
            "bibtex": "@article{Tanweer2024a,<br> archiveprefix = {arXiv},<br> author = {Tanweer, Sunia and Khasawneh, Firas A. and Munch, Elizabeth},<br> copyright = {arXiv.org perpetual, non-exclusive license},<br> doi = {10.3934/fods.2024006},<br> eprint = {2301.07703},<br> issn = {2639-8001},<br> journal = {Foundations of Data Science},<br> month = {jan},<br> primaryclass = {cs.CG},<br> publisher = {American Institute of Mathematical Sciences (AIMS)},<br> title = {Robust crossings detection in noisy signals using topological signal processing},<br> year = {2024}<br>}<br>",
            "collapseLabel": "Tanweer2024a",
            "date": 2024,
            "image": "../img/Tanweer2023.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.3934/fods.2024006",
            "title": "Robust crossings detection in noisy signals using topological signal processing",
            "venue": "Foundations of Data Science"
        },
        {
            "abstract": "Changes in the parameters of dynamical systems can cause the state of the system to shift between different qualitative regimes. These shifts, known as bifurcations, are critical to study as they can indicate when the system is about to undergo harmful changes in its behaviour. In stochastic dynamical systems, particular interest is in P-type (phenomenological) bifurcations, which can include transitions from a mono-stable state to multi-stable states, the appearance of stochastic limit cycles, and other features in the probability distributions of the system's state space. Currently, the common practice is to visually analyze the probability density function to determine the type of state, but this approach is limited to experienced users, systems with small state spaces and mandate human intervention. In contrast, this study presents a new approach based on Topological Data Analysis (TDA) that uses the superlevel persistence of the probability or kernel density function to mathematically quantify P-type bifurcations in stochastic systems using the ranks of $0^th$ and $1^st$ homology groups.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2305.03118",
            "authors": "Sunia Tanweer, Firas A. Khasawneh, Elizabeth Munch, and Joshua R. Tempelman",
            "bibtex": "@article{Tanweer2024,<br> archiveprefix = {arXiv},<br> author = {Tanweer, Sunia and Khasawneh, Firas A. and Munch, Elizabeth and Tempelman, Joshua R.},<br> copyright = {arXiv.org perpetual, non-exclusive license},<br> doi = {10.1007/s11071-024-09289-1},<br> eprint = {2305.03118},<br> issn = {1573-269X},<br> journal = {Nonlinear Dynamics},<br> month = {February},<br> primaryclass = {math.DS},<br> publisher = {Springer Science and Business Media LLC},<br> title = {A topological framework for identifying phenomenological bifurcations in stochastic dynamical systems},<br> year = {2024}<br>}<br>",
            "collapseLabel": "Tanweer2024",
            "date": 2024,
            "image": "../img/Tanweer2023a.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.1007/s11071-024-09289-1",
            "title": "A topological framework for identifying phenomenological bifurcations in stochastic dynamical systems",
            "venue": "Nonlinear Dynamics"
        },
        {
            "abstract": "Geometric graphs appear in many real-world data sets, such as road networks, sensor networks, and molecules. We investigate the notion of distance between embedded graphs and present a metric to measure the distance between two geometric graphs via merge trees. In order to preserve as much useful information as possible from the original data, we introduce a way of rotating the sublevel set to obtain the merge trees via the idea of the directional transform. We represent the merge trees using a surjective multi-labeling scheme and then compute the distance between two representative matrices. We show some theoretically desirable qualities and present two methods of computation: approximation via sampling and exact distance using a kinetic data structure, both in polynomial time. We illustrate its utility by implementing it on two data sets.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2407.09442",
            "authors": "Erin Wolf Chambers, Elizabeth Munch, Sarah Percival, and Xinyi Wang",
            "bibtex": "@article{Chambers2024,<br> archiveprefix = {arXiv},<br> author = {Chambers, Erin Wolf and Munch, Elizabeth and Percival, Sarah and Wang, Xinyi},<br> copyright = {arXiv.org perpetual, non-exclusive license},<br> doi = {10.48550/ARXIV.2407.09442},<br> eprint = {2407.09442},<br> month = {July},<br> primaryclass = {cs.DS},<br> publisher = {arXiv},<br> title = {A Distance for Geometric Graphs via the Labeled Merge Tree Interleaving Distance},<br> year = {2024}<br>}<br>",
            "collapseLabel": "Chambers2024",
            "date": 2024,
            "image": "../img/Chambers2024.png",
            "keywords": [
                "Graph",
                "Interleaving",
                "DirTrans"
            ],
            "title": "A Distance for Geometric Graphs via the Labeled Merge Tree Interleaving Distance",
            "venue": "arXiv:2407.09442"
        },
        {
            "abstract": "Reeb graphs are widely used in a range of fields for the purposes of analyzing and comparing complex spaces via a simpler combinatorial object. Further, they are closely related to extended persistence diagrams, which largely but not completely encode the information of the Reeb graph. In this paper, we investigate the effect on the persistence diagram of a particular continuous operation on Reeb graphs; namely the (truncated) smoothing operation. This construction arises in the context of the Reeb graph interleaving distance, but separately from that viewpoint provides a simplification of the Reeb graph which continuously shrinks small loops. We then use this characterization to initiate the study of inverse problems for Reeb graphs using smoothing by showing which paths in persistence diagram space (commonly known as vineyards) can be realized by a path in the space of Reeb graphs via these simple operations. This allows us to solve the inverse problem on a certain family of piecewise linear vineyards when fixing an initial Reeb graph.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2107.04654",
            "authors": "Rehab Alharbi, Erin Wolf Chambers, and Elizabeth Munch",
            "bibtex": "@article{Alharbi2024,<br> archiveprefix = {arXiv},<br> author = {Rehab Alharbi and Erin Wolf Chambers and Elizabeth Munch},<br> copyright = {Creative Commons Attribution 4.0 International},<br> doi = {10.57717/CGT.V3I1.38},<br> eprint = {2107.04654},<br> eprinttype = {arXiv},<br> journal = {Computing in Geometry and Topology},<br> language = {en},<br> month = {jul},<br> primaryclass = {cs.CG},<br> publisher = {Computing in Geometry and Topology},<br> title = {Realizable Piecewise Linear Paths of Persistence Diagrams with Reeb Graphs},<br> year = {2024}<br>}<br>",
            "collapseLabel": "Alharbi2024",
            "date": 2024,
            "image": "../img/Alharbi2021.png",
            "keywords": [
                "Graph",
                "Interleaving"
            ],
            "publishedLink": "https://doi.org/10.57717/CGT.V3I1.38",
            "title": "Realizable Piecewise Linear Paths of Persistence Diagrams with Reeb Graphs",
            "venue": "Computing in Geometry and Topology"
        },
        {
            "abstract": "The selection of Arabidopsis as a model organism played a pivotal role in advancing genomic science, firmly establishing the cornerstone of modern plant molecular biology. Competing frameworks to select an agricultural- or ecological-based model species, or to decentralize plant science and study a multitude of diverse species, were selected against in favor of building core knowledge in a species that would facilitate genome-enabled research that could assumedly be transferred to other plants. Here, over twenty years after sequencing the Arabidopsis genome and during which time sequencing data from other plant species has accumulated and computation enabling machine learning has evolved, we critically examine the ability of models based on Arabidopsis gene expression data to predict tissue identity in other flowering plant species. Comparing different machine learning algorithms, models trained and tested on Arabidopsis data achieved precision and recall values of up to 0.99 using the K-Nearest Neighbor method, whereas when tissue identity is predicted across the flowering plants using models trained on Arabidopsis data, precision values range from 0.70 to 0.75 and recall from 0.55 to 0.64, depending on the algorithm used. Below-ground tissue is more predictable than other tissue types, and the ability to predict tissue identity is not correlated with phylogenetic distance from Arabidopsis. Our data-driven results suggest that, in hindsight, the assertion that knowledge from Arabidopsis is translatable to other plants is not as strong as originally assumed, and that in the current era where sequencing data and computation abound, we should decentralize the scientific focus on Arabidopsis and embrace plant diversity.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://doi.org/10.1101/2023.08.20.554029",
            "authors": "Sourabh Palande, Jeremy Arsenault, Patricia Basurto\u2010Lozada, Andrew Bleich, Brianna N. I. Brown, Sophia F. Buysse, Noelle A. Connors, Sikta Das Adhikari, Kara C. Dobson, Francisco Xavier Guerra\u2010Castillo, Maria F. Guerrero\u2010Carrillo, Sophia Harlow, H\u00e9ctor Herrera\u2010Orozco, Asia T. Hightower, Paulo Izquierdo, MacKenzie Jacobs, Nicholas A. Johnson, Wendy Leuenberger, Alessandro Lopez\u2010Hernandez, Alicia Luckie\u2010Duque, Camila Mart\u00ednez\u2010Avila, Eddy J. Mendoza\u2010Galindo, David Cruz Plancarte, Jenny M. Schuster, Harry Shomer, Sidney C. Sitar, Anne K. Steensma, Joanne Elise Thomson, Dami\u00e1n Villase\u00f1or\u2010Amador, Robin Waterman, Brandon M. Webster, Madison Whyte, Sof\u00eda Zorilla\u2010Azcu\u00e9, Beronda L. Montgomery, Aman Y. Husbands, Arjun Krishnan, Sarah Percival, Elizabeth Munch, Robert VanBuren, Daniel H. Chitwood, and Alejandra Rougon\u2010Cardoso",
            "bibtex": "@article{Palande2024a,<br> author = {Palande, Sourabh and Arsenault, Jeremy and Basurto\u2010Lozada, Patricia and Bleich, Andrew and Brown, Brianna N. I. and Buysse, Sophia F. and Connors, Noelle A. and Das Adhikari, Sikta and Dobson, Kara C. and Guerra\u2010Castillo, Francisco Xavier and Guerrero\u2010Carrillo, Maria F. and Harlow, Sophia and Herrera\u2010Orozco, H\u00e9ctor and Hightower, Asia T. and Izquierdo, Paulo and Jacobs, MacKenzie and Johnson, Nicholas A. and Leuenberger, Wendy and Lopez\u2010Hernandez, Alessandro and Luckie\u2010Duque, Alicia and Mart\u00ednez\u2010Avila, Camila and Mendoza\u2010Galindo, Eddy J. and Plancarte, David Cruz and Schuster, Jenny M. and Shomer, Harry and Sitar, Sidney C. and Steensma, Anne K. and Thomson, Joanne Elise and Villase\u00f1or\u2010Amador, Dami\u00e1n and Waterman, Robin and Webster, Brandon M. and Whyte, Madison and Zorilla\u2010Azcu\u00e9, Sof\u00eda and Montgomery, Beronda L. and Husbands, Aman Y. and Krishnan, Arjun and Percival, Sarah and Munch, Elizabeth and VanBuren, Robert and Chitwood, Daniel H. and Rougon\u2010Cardoso, Alejandra},<br> doi = {10.1002/aps3.11621},<br> eprint = {10.1101/2023.08.20.554029},<br> eprinttype = {bioRxiv},<br> issn = {2168-0450},<br> journal = {Applications in Plant Sciences},<br> month = {oct},<br> publisher = {Wiley},<br> title = {Expression\u2010based machine learning models for predicting plant tissue identity},<br> year = {2024}<br>}<br>",
            "collapseLabel": "Palande2024a",
            "date": 2024,
            "image": "../img/Palande2023.png",
            "keywords": [
                "Plants"
            ],
            "publishedLink": "https://doi.org/10.1002/aps3.11621",
            "title": "Expression\u2010based machine learning models for predicting plant tissue identity",
            "venue": "Applications in Plant Sciences"
        },
        {
            "abstract": "Merge trees are a type of graph-based topological summary that tracks the evolution of connected components in the sublevel sets of scalar functions. They enjoy widespread applications in data analysis and scientific visualization. In this paper, we consider the problem of comparing two merge trees via the notion of interleaving distance in the metric space setting. We investigate various theoretical properties of such a metric. In particular, we show that the interleaving distance is intrinsic on the space of labeled merge trees and provide an algorithm to construct metric 1-centers for collections of labeled merge trees. We further prove that the intrinsic property of the interleaving distance also holds for the space of unlabeled merge trees. Our results are a first step toward performing statistics on graph-based topological summaries.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1908.00063",
            "authors": "Ellen Gasparovic, Elizabeth Munch, Steve Oudot, Katharine Turner, Bei Wang, and Yusu Wang",
            "bibtex": "@article{Gasparovic2024,<br> author = {Gasparovic, Ellen and Munch, Elizabeth and Oudot, Steve and Turner, Katharine and Wang, Bei and Wang, Yusu},<br> creationdate = {2020-06-09T00:00:00},<br> doi = {10.1007/s44007-024-00143-9},<br> eprint = {1908.00063},<br> eprintclass = {cs.CG},<br> eprinttype = {arXiv},<br> issn = {2730-9657},<br> journal = {La Matematica},<br> month = {December},<br> publisher = {Springer Science and Business Media LLC},<br> title = {Intrinsic Interleaving Distance for Merge Trees},<br> year = {2024}<br>}<br>",
            "collapseLabel": "Gasparovic2024",
            "date": 2024,
            "image": "../img/Gasparovic2019_MergeTreesAndMatrices2.png",
            "keywords": [
                "Graph",
                "Interleaving"
            ],
            "publishedLink": "https://doi.org/10.1007/s44007-024-00143-9",
            "title": "Intrinsic Interleaving Distance for Merge Trees",
            "venue": "La Matematica"
        },
        {
            "abstract": "This work presents a framework for studying temporal networks using zigzag persistence, a tool from the field of Topological Data Analysis (TDA). The resulting approach is general and applicable to a wide variety of time-varying graphs. For example, these graphs may correspond to a system modeled as a network with edges whose weights are functions of time, or they may represent a time series of a complex dynamical system. We use simplicial complexes to represent snapshots of the temporal networks that can then be analyzed using zigzag persistence. We show two applications of our method to dynamic networks: an analysis of commuting trends on multiple temporal scales, e.g., daily and weekly, in the Great Britain transportation network, and the detection of periodic/chaotic transitions due to intermittency in dynamical systems represented by temporal ordinal partition networks. Our findings show that the resulting zero- and one-dimensional zigzag persistence diagrams can detect changes in the networks' shapes that are missed by traditional connectivity and centrality graph statistics.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2205.11338",
            "authors": "Audun Myers, David Mu\u00f1oz, Firas A. Khasawneh, and Elizabeth Munch",
            "bibtex": "@article{Myers2022a,<br> archiveprefix = {arXiv},<br> author = {Audun Myers and David Mu\u00f1oz and Firas A. Khasawneh and Elizabeth Munch},<br> doi = {10.1140/epjds/s13688-023-00379-5},<br> eprint = {2205.11338},<br> journal = {EPJ Data Science},<br> month = {mar},<br> number = {6},<br> primaryclass = {cs.CG},<br> title = {Temporal Network Analysis Using Zigzag Persistence},<br> volume = {12},<br> year = {2023}<br>}<br>",
            "collapseLabel": "Myers2022a",
            "date": 2023,
            "image": "../img/Myers2022a-zigzag.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.1140/epjds/s13688-023-00379-5",
            "title": "Temporal Network Analysis Using Zigzag Persistence",
            "venue": "EPJ Data Science"
        },
        {
            "abstract": "Graphs drawn in the plane are ubiquitous, arising from data sets through a variety of methods ranging from GIS analysis to image classification to shape analysis. A fundamental problem in this type of data is comparison: given a set of such graphs, can we rank how similar they are, in such a way that we capture their geometric \"shape\" in the plane? In this paper we explore a method to compare two such embedded graphs, via a simplified combinatorial representation called a tail-less merge tree which encodes the structure based on a fixed direction. First, we examine the properties of a distance designed to compare merge trees called the branching distance, and show that the distance as defined in previous work fails to satisfy some of the requirements of a metric. We incorporate this into a new distance function called average branching distance to compare graphs by looking at the branching distance for merge trees defined over many directions. Despite the theoretical issues, we show that the definition is still quite useful in practice by using our open-source code to cluster data sets of embedded graphs.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2210.10181",
            "authors": "Levent Batakci, Abigail Branson, Bryan Castillo, Candace Todd, Erin Wolf Chambers, and Elizabeth Munch",
            "bibtex": "@article{Batakci2022,<br> archiveprefix = {arXiv},<br> author = {Levent Batakci and Abigail Branson and Bryan Castillo and Candace Todd and Erin Wolf Chambers and Elizabeth Munch},<br> doi = {10.2140/involve.2023.16.365},<br> eprint = {2210.10181},<br> journal = {Involve, a Journal of Mathematics},<br> month = {August},<br> number = {3},<br> pages = {365-388},<br> primaryclass = {cs.CG},<br> title = {Comparing Embedded Graphs Using Average Branching Distance},<br> volume = {16},<br> year = {2023}<br>}<br>",
            "collapseLabel": "Batakci2022",
            "date": 2023,
            "image": "../img/Batakci2022.png",
            "keywords": [
                "Graph",
                "REU"
            ],
            "publishedLink": "https://doi.org/10.2140/involve.2023.16.365",
            "title": "Comparing Embedded Graphs Using Average Branching Distance",
            "venue": "Involve, a Journal of Mathematics"
        },
        {
            "abstract": "Graphs in metric spaces appear in a wide range of data sets, and there is a large body of work focused on comparing, matching, or analyzing collections of graphs in different ambient spaces. In this survey, we provide an overview of a diverse collection of distance measures that can be defined on the set of finite graphs immersed (and in some cases, embedded) in a metric space. For each of the distance measures, we recall their definitions and investigate which of the properties of a metric they satisfy. Furthermore we compare the distance measures based on these properties and discuss their computational complexity.",
            "altText": "A figure from the paper.",
            "authors": "Maike Buchin, Erin Chambers, Pan Fang, Brittany Terese Fasy, Ellen Gasparovic, Elizabeth Munch, and Carola Wenk",
            "bibtex": "@article{Buchin2023,<br> author = {Buchin, Maike and Chambers, Erin and Fang, Pan and Fasy, Brittany Terese and Gasparovic, Ellen and Munch, Elizabeth and Wenk, Carola},<br> doi = {10.1007/s44007-022-00037-8},<br> journal = {La Mathematica},<br> month = {jan},<br> publisher = {Springer Science and Business Media {LLC}},<br> title = {Distances Between Immersed Graphs: Metric Properties},<br> year = {2023}<br>}<br>",
            "collapseLabel": "Buchin2023",
            "date": 2023,
            "image": "../img/Buchin2023.png",
            "keywords": [
                "Intro",
                "Graph"
            ],
            "publishedLink": "https://doi.org/10.1007/s44007-022-00037-8",
            "title": "Distances Between Immersed Graphs: Metric Properties",
            "venue": "La Mathematica"
        },
        {
            "abstract": "One of the most important problems arising in time series analysis is that of bifurcation, or change point detection. That is, given a collection of time series over a varying parameter, when has the structure of the underlying dynamical system changed? For this task, we turn to the field of topological data analysis (TDA), which encodes information about the shape and structure of data. The idea of utilizing tools from TDA for signal processing tasks, known as topological signal processing (TSP), has gained much attention in recent years, largely through a standard pipeline that computes the persistent homology of the point cloud generated by the Takens' embedding. However, this procedure is limited by computation time since the simplicial complex generated in this case is large, but also has a great deal of redundant data. For this reason, we turn to a more recent method for encoding the structure of the attractor, which constructs an ordinal partition network (OPN) representing information about when the dynamical system has passed between certain regions of state space. The result is a weighted graph whose structure encodes information about the underlying attractor. Our previous work began to find ways to package the information of the OPN in a manner that is amenable to TDA; however, that work only used the network structure and did nothing to encode the additional weighting information. In this paper, we take the next step: building a pipeline to analyze the weighted OPN with TDA and showing that this framework provides more resilience to noise or perturbations in the system and improves the accuracy of the dynamic state detection.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2205.08349",
            "authors": "Audun Myers, Firas A. Khasawneh, and Elizabeth Munch",
            "bibtex": "@article{Myers2023,<br> archiveprefix = {arXiv},<br> author = {Audun Myers and Firas A. Khasawneh and Elizabeth Munch},<br> doi = {10.1137/22m1476848},<br> eprint = {2205.08349},<br> journal = {{SIAM} Journal on Applied Dynamical Systems},<br> month = {feb},<br> number = {1},<br> pages = {65--89},<br> primaryclass = {stat.ML,},<br> publisher = {Society for Industrial {\\&} Applied Mathematics ({SIAM})},<br> title = {Persistence of Weighted Ordinal Partition Networks for Dynamic State Detection},<br> volume = {22},<br> year = {2023}<br>}<br>",
            "collapseLabel": "Myers2023",
            "date": 2023,
            "image": "../img/Myers2022.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.1137/22m1476848",
            "title": "Persistence of Weighted Ordinal Partition Networks for Dynamic State Detection",
            "venue": "SIAM Journal on Applied Dynamical Systems"
        },
        {
            "abstract": "This work is dedicated to the topological analysis of complex transitional networks for dynamic state detection. Transitional networks are formed from time series data and they leverage graph theory tools to reveal information about the underlying dynamic system. However, traditional tools can fail to summarize the complex topology present in such graphs. In this work, we leverage persistent homology from topological data analysis to study the structure of these networks. We contrast dynamic state detection from time series using CGSSN and TDA to two state of the art approaches: Ordinal Partition Networks (OPNs) combined with TDA, and the standard application of persistent homology to the time-delay embedding of the signal. We show that the CGSSN captures rich information about the dynamic state of the underlying dynamical system as evidenced by a significant improvement in dynamic state detection and noise robustness in comparison to OPNs. We also show that because the computational time of CGSSN is not linearly dependent on the signal's length, it is more computationally efficient than applying TDA to the time-delay embedding of the time series.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2206.02530",
            "authors": "Audun D. Myers, Max M. Chumley, Firas A. Khasawneh, and Elizabeth Munch",
            "bibtex": "@article{Myers2023a,<br> archiveprefix = {arXiv},<br> author = {Myers, Audun D. and Chumley, Max M. and Khasawneh, Firas A. and Munch, Elizabeth},<br> doi = {10.1103/PhysRevE.107.034303},<br> eprint = {2206.02530},<br> issue = {3},<br> journal = {Phys. Rev. E},<br> month = {Mar},<br> numpages = {17},<br> pages = {034303},<br> primaryclass = {stat.ML},<br> publisher = {American Physical Society},<br> title = {Persistent homology of coarse-grained state-space networks},<br> url = {https://link.aps.org/doi/10.1103/PhysRevE.107.034303},<br> volume = {107},<br> year = {2023}<br>}<br>",
            "collapseLabel": "Myers2023a",
            "date": 2023,
            "image": "../img/Myers2022b.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.1103/PhysRevE.107.034303",
            "title": "Persistent homology of coarse-grained state-space networks",
            "venue": "Phys. Rev. E"
        },
        {
            "abstract": "Evaluating the success of a manifold learning method remains a challenging problem, especially for methods adapted to a specific application domain. The present work investigates shared geometric structure across different dimensionality reduction (DR) algorithms within the scope of neuroimaging applications. We examine reduced-dimension embeddings produced by a representative assay of dimension reductions for brain data (\"brain representations\") through the lens of persistent homology, making statistical claims about topological differences using a recent topological boostrap method. We cluster these methods based on their induced topologies, finding feature type and number -- rather than reduction algorithm -- as the main drivers of observed topological differences.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2306.13802",
            "authors": "Ty Easley, Kevin Freese, Elizabeth Munch, and Janine Bijsterbosch",
            "bibtex": "@article{Easley2023,<br> archiveprefix = {arXiv},<br> author = {Easley, Ty and Freese, Kevin and Munch, Elizabeth and Bijsterbosch, Janine},<br> copyright = {Creative Commons Attribution Non Commercial Share Alike 4.0 International},<br> doi = {10.48550/ARXIV.2306.13802},<br> eprint = {2306.13802},<br> month = {June},<br> primaryclass = {cs.CG},<br> publisher = {arXiv},<br> title = {Using persistent homology to understand dimensionality reduction in resting-state fMRI},<br> year = {2023}<br>}<br>",
            "collapseLabel": "Easley2023",
            "date": 2023,
            "image": "../img/Easley2023.png",
            "keywords": [
                "Pers"
            ],
            "title": "Using persistent homology to understand dimensionality reduction in resting-state fMRI",
            "venue": "arXiv:2306.13802"
        },
        {
            "abstract": "Since they emerged ~125 million years ago, flowering plants have evolved to dominate the terrestrial landscape and survive in the most inhospitable environments on earth. At their core, these adaptations have been shaped by changes in numerous, interconnected pathways and genes that collectively give rise to emergent biological phenomena. Linking gene expression to morphological outcomes remains a grand challenge in biology, and new approaches are needed to begin to address this gap. Here, we implemented topological data analysis (TDA) to summarize the high dimensionality and noisiness of gene expression data using lens functions that delineate plant tissue and stress responses. Using this framework, we created a topological representation of the shape of gene expression across plant evolution, development, and environment for the phylogenetically diverse flowering plants. The TDA-based Mapper graphs form a well-defined gradient of tissues from leaves to seeds, or from healthy to stressed samples, depending on the lens function. This suggests there are distinct and conserved expression patterns across angiosperms that delineate different tissue types or responses to biotic and abiotic stresses. Genes that correlate with the tissue lens function are enriched in central processes such as photosynthetic, growth and development, housekeeping, or stress responses. Together, our results highlight the power of TDA for analyzing complex biological data and reveal a core expression backbone that defines plant form and function.Competing Interest StatementThe authors have declared no competing interest.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://doi.org/10.1101/2022.09.07.506951",
            "authors": "Sourabh Palande, Joshua A. M. Kaste, Miles D. Roberts, Kenia Segura Ab\u00e1, Carly Claucherty, Jamell Dacon, Rei Doko, Thilani B. Jayakody, Hannah R. Jeffery, Nathan Kelly, Andriana Manousidaki, Hannah M. Parks, Emily M. Roggenkamp, Ally M. Schumacher, Jiaxin Yang, Sarah Percival, Jeremy Pardo, Aman Y. Husbands, Arjun Krishnan, Beronda L Montgomery, Elizabeth Munch, Addie M. Thompson, Alejandra Rougon-Cardoso, Daniel H. Chitwood, and Robert VanBuren",
            "bibtex": "@article{Palande2023a,<br> author = {Palande, Sourabh and Kaste, Joshua A. M. and Roberts, Miles D. and Segura Ab\u00e1, Kenia and Claucherty, Carly and Dacon, Jamell and Doko, Rei and Jayakody, Thilani B. and Jeffery, Hannah R. and Kelly, Nathan and Manousidaki, Andriana and Parks, Hannah M. and Roggenkamp, Emily M. and Schumacher, Ally M. and Yang, Jiaxin and Percival, Sarah and Pardo, Jeremy and Husbands, Aman Y. and Krishnan, Arjun and Montgomery, Beronda L and Munch, Elizabeth and Thompson, Addie M. and Rougon-Cardoso, Alejandra and Chitwood, Daniel H. and VanBuren, Robert},<br> doi = {10.1371/journal.pbio.3002397},<br> editor = {Drost, Hajk-Georg},<br> eprint = {10.1101/2022.09.07.506951},<br> eprinttype = {bioRxiv},<br> issn = {1545-7885},<br> journal = {PLOS Biology},<br> month = {December},<br> number = {12},<br> pages = {e3002397},<br> publisher = {Public Library of Science (PLoS)},<br> title = {Topological data analysis reveals a core gene expression backbone that defines form and function across flowering plants},<br> volume = {21},<br> year = {2023}<br>}<br>",
            "collapseLabel": "Palande2023a",
            "date": 2023,
            "image": "../img/Palande2022.png",
            "keywords": [
                "Graph",
                "Plants"
            ],
            "publishedLink": "https://doi.org/10.1371/journal.pbio.3002397",
            "title": "Topological data analysis reveals a core gene expression backbone that defines form and function across flowering plants",
            "venue": "PLOS Biology"
        },
        {
            "abstract": "Cells communicate with one another through a variety of signaling mechanisms. Exchange of information via these mechanisms allows cells to coordinate their behaviour and respond to environmental stress and other stimuli. To facilitate quantitative understanding of complex spatiotemporal signaling activity, we developed Geometric Scattering Trajectory Homology, a general framework that encapsulates time-lapse signals on a cell adjacency graph in a low-dimensional trajectory. We tested this framework using computational models of collective oscillations and calcium signaling in the Drosophila wing imaginal disc, as well as experimental data, including in vitro ERK signaling in human mammary epithelial cells and in vivo calcium signaling from the mouse epidermis and visual cortex. We found that the geometry and topology of the trajectory are related to the degree of synchrony (over space and time), intensity, speed, and quasi-periodicity of the signaling pattern. We recovered model parameters and experimental conditions by training neural networks on trajectory data, showing that our approach preserves information that characterizes various cell types, tissues and drug treatments. We envisage the applicability of our framework in various biological contexts to generate new insights into cell communication.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://doi.org/10.1101/2023.03.22.533807",
            "authors": "Dhananjay Bhaskar, Yanlei Zhang, Jessica Moore, Feng Gao, Bastian Rieck, Guy Wolf, Firas Khasawneh, Elizabeth Munch, J. Adam Noah, Helen Pushkarskaya, Christopher Pittenger, Valentina Greco, and Smita Krishnaswamy",
            "bibtex": "@article{Bhaskar2023,<br> author = {Bhaskar, Dhananjay and Zhang, Yanlei and Moore, Jessica and Gao, Feng and Rieck, Bastian and Wolf, Guy and Khasawneh, Firas and Munch, Elizabeth and Noah, J. Adam and Pushkarskaya, Helen and Pittenger, Christopher and Greco, Valentina and Krishnaswamy, Smita},<br> doi = {10.1101/2023.03.22.533807},<br> eprint = {10.1101/2023.03.22.533807},<br> eprinttype = {bioRxiv},<br> month = {mar},<br> publisher = {Cold Spring Harbor Laboratory},<br> title = {Neurospectrum: A Geometric and Topological Deep Learning Framework for Uncovering Spatiotemporal Signatures in Neural Activity},<br> year = {2023}<br>}<br>",
            "collapseLabel": "Bhaskar2023",
            "date": 2023,
            "image": "../img/Bhaskar2023.png",
            "keywords": [],
            "title": "Neurospectrum: A Geometric and Topological Deep Learning Framework for Uncovering Spatiotemporal Signatures in Neural Activity",
            "venue": "bioRxiv:10.1101/2023.03.22.533807"
        },
        {
            "abstract": "Reeb graphs form a variant of level graphs that commonly arise in the field of topological data analysis. The vertices of a Reeb graph are associated with a real-valued level. In the context of topological data analysis, the level of a vertex usually corresponds to some imprecise measured quantity. Due to this imprecision, nearby points in a Reeb graph may represent the same point in\nthe ground-truth.\n\nWe consider drawings of Reeb graphs in the plane, where the y-coordinate of a vertex is specified by its level, and edges are drawn as y-monotone paths. We introduce the crossing radius as a quality measure for Reeb graph drawings. Under this measure, level-planar drawings of Reeb graphs are optimal if they exist. In this regard, our measure coincides with existing quality measures that simply count the number of crossings. On the other hand, most Reeb graphs found in practice do not admit level-planar drawings. In contrast to measures that count the number of crossings, our measure associates a cost with each crossing, and returns the maximum cost over all crossings. The cost of a crossing intuitively quantifies the likelihood that the necessity of a crossing can be attributed to imprecise measurements. For this reason, crossing radius is a preferable measure in the context of topological data analysis. We also show that for a given Reeb graph, computing a drawing with optimal crossing radius is NP-hard.",
            "altText": "A figure from the paper.",
            "authors": "Erin Chambers, Elizabeth Munch, and Tim Ophelders",
            "bibtex": "@inproceedings{Chambers2022,<br> author = {Erin Chambers and Elizabeth Munch and Tim Ophelders},<br> booktitle = {EuroCG},<br> title = {A quality measure for Reeb graph drawings},<br> url = {https://eurocg2022.unipg.it/booklet/EuroCG2022-Booklet.pdf#paper63.1},<br> year = {2022}<br>}<br>",
            "collapseLabel": "Chambers2022",
            "date": 2022,
            "image": "../img/Chambers2022.png",
            "keywords": [
                "Interleaving",
                "Graph"
            ],
            "publishedLink": "https://eurocg2022.unipg.it/booklet/EuroCG2022-Booklet.pdf#paper63.1",
            "title": "A quality measure for Reeb graph drawings",
            "venue": "EuroCG"
        },
        {
            "abstract": "The CROCKER plot is a coarsened but easy to visualize representation of the data in a one-parameter varying family of persistence barcodes. In this paper, we use the CROCKER plot to view changes in the persistence under a varying bifurcation parameter. We perform experiments to support our methods using the Roessler and Lorenz system and show the relationship with common methods for bifurcation analysis such as the Lyapunov exponent.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2204.06321",
            "authors": "\u0130smail G\u00fczel, Elizabeth Munch, and Firas Khasawneh",
            "bibtex": "@inproceedings{Guezel2022,<br> archiveprefix = {arXiv},<br> author = {\u0130smail G\u00fczel and Elizabeth Munch and Firas Khasawneh},<br> booktitle = {Proceedings of TDA at SDM (SIAM Data Mining)},<br> doi = {10.48550/arXiv.2204.06321},<br> editor = {R. W. R. Darling and John A. Emanuello and Emilie Purvine and Ahmad Ridley},<br> eprint = {2204.06321},<br> month = {apr},<br> organization = {SIAM Data Mining},<br> primaryclass = {math.DS},<br> publisher = {arXiv Proceedings},<br> title = {A Case Study on Identifying Bifurcation and Chaos with CROCKER Plots},<br> url = {https://arxiv.org/html/2204.01142},<br> year = {2022}<br>}<br>",
            "collapseLabel": "Guezel2022",
            "date": 2022,
            "image": "../img/Guzel2022.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.48550/arXiv.2204.06321",
            "title": "A Case Study on Identifying Bifurcation and Chaos with CROCKER Plots",
            "venue": "Proceedings of TDA at SDM (SIAM Data Mining)"
        },
        {
            "abstract": "The persistence diagram is an increasingly useful tool arising from the field of Topological Data Analysis. However, using these diagrams in conjunction with machine learning techniques requires some mathematical finesse. The most success to date has come from finding methods for turning persistence diagrams into vectors in $\\mathbbR^n$ in a way which preserves as much of the space of persistence diagrams as possible, commonly referred to as featurization. In this paper, we describe a mathematical framework for featurizing the persistence diagram space using template functions. These functions are general as they are only required to be continuous, have a compact support, and separate points. We discuss two example realizations of these functions: tent functions and Chybeyshev interpolating polynomials. Both of these functions are defined on a grid superposed on the birth-lifetime plane. We then combine the resulting features with machine learning algorithms to perform supervised classification and regression on several example data sets, including manifold data, shape data, and an embedded time series from a Rossler system. Our results show that the template function approach yields high accuracy rates that match and often exceed the results of existing methods for featurizing persistence diagrams. One counter-intuitive observation is that in most cases using interpolating polynomials, where each point contributes globally to the feature vector, yields significantly better results than using tent functions, where the contribution of each point is localized to its grid cell. Along the way, we also provide a complete characterization of compact sets in persistence diagram space endowed with the bottleneck distance.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1902.07190",
            "authors": "Jose A. Perea, Elizabeth Munch, and Firas A. Khasawneh",
            "bibtex": "@article{Perea2022,<br> author = {Jose A. Perea and Elizabeth Munch and Firas A. Khasawneh},<br> creationdate = {2019-02-20T00:00:00},<br> doi = {10.1007/s10208-022-09567-7},<br> eprint = {1902.07190},<br> eprintclass = {cs.CG, math.AT, math.ST, stat.ML, stat.TH},<br> eprinttype = {arXiv},<br> journal = {Foundations of Computational Mathematics},<br> month = {jun},<br> priority = {prio1},<br> publisher = {Springer Science and Business Media {LLC}},<br> readstatus = {skimmed},<br> title = {Approximating Continuous Functions on Persistence Diagrams Using Template Functions},<br> year = {2022}<br>}<br>",
            "collapseLabel": "Perea2022",
            "date": 2022,
            "image": "../img/Perea2019_RegressionCoeff-Line-Poly.png",
            "keywords": [
                "ML"
            ],
            "publishedLink": "https://doi.org/10.1007/s10208-022-09567-7",
            "title": "Approximating Continuous Functions on Persistence Diagrams Using Template Functions",
            "venue": "Foundations of Computational Mathematics"
        },
        {
            "abstract": "Existing tools for bifurcation detection from signals of dynamical systems typically are either limited to a special class of systems, or they require carefully chosen input parameters, and significant expertise to interpret the results. Therefore, we describe an alternative method based on persistent homology -- a tool from Topological Data Analysis (TDA) -- that utilizes Betti numbers and CROCKER plots. Betti numbers are topological invariants of topological spaces, while the CROCKER plot is a coarsened but easy to visualize data representation of a one-parameter varying family of persistence barcodes. The specific bifurcations we investigate are transitions from periodic to chaotic behavior or vice versa in a one-parameter family of differential equations. We validate our methods using numerical experiments on ten dynamical systems and contrast the results with existing tools that use the maximum Lyapunov exponent. We further prove the relationship between the Wasserstein distance to the empty diagram and the norm of the Betti vector, which shows that an even more simplified version of the information has the potential to provide insight into the bifurcation parameter. The results show that our approach reveals more information about the shape of the periodic attractor than standard tools, and it has more favorable computational time in comparison to the Rosenstein algorithm for computing the Lyapunov exponent from time series.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2206.04861",
            "authors": "\u0130smail G\u00fczel, Elizabeth Munch, and Firas A. Khasawneh",
            "bibtex": "@article{Guezel2022a,<br> archiveprefix = {arXiv},<br> author = {\u0130smail G\u00fczel and Elizabeth Munch and Firas A. Khasawneh},<br> doi = {10.1063/5.0102421},<br> eprint = {2206.04861},<br> journal = {CHAOS},<br> month = {jun},<br> number = {093111},<br> primaryclass = {math.DS},<br> title = {Detecting bifurcations in dynamical systems with CROCKER plots},<br> volume = {32},<br> year = {2022}<br>}<br>",
            "collapseLabel": "Guezel2022a",
            "date": 2022,
            "image": "../img/Guezel2022a.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.1063/5.0102421",
            "title": "Detecting bifurcations in dynamical systems with CROCKER plots",
            "venue": "CHAOS"
        },
        {
            "abstract": "Citrus come in diverse sizes and shapes, and play a key role in world culture and economy. Citrus oil glands in particular contain essential oils which include plant secondary metabolites associated with flavor and aroma. Capturing and analyzing nuanced information behind the citrus fruit shape and its oil gland distribution provide a morphology-driven path to further our insight into phenotype\u2013genotype interactions.\n\nWe investigated the shape of citrus fruit of 51 accessions based on 3D X-ray computed tomography (CT) scan reconstructions. Accessions include members of the three ancestral citrus species as well as related genera, and several interspecific hybrids. We digitally separate and compare the size of fruit endocarp, mesocarp, exocarp, and oil gland tissue. Based on the centers of the oil glands, overall fruit shape is approximated with an ellipsoid. Possible oil gland distributions on this ellipsoid surface are explored using directional statistics.\n\nThere is a strong allometry along fruit tissues; that is, we observe a strong linear relationship between the logarithmic volume of any pair of major tissues. This suggests that the relative growth of fruit tissues with respect to each other follows a power law. We also observe that on average, glands distance themselves from their nearest neighbor following a square root relationship, which suggests normal diffusion dynamics at play.\n\nThe observed allometry and square root models point to the existence of biophysical developmental constraints that govern novel relationships between fruit dimensions from both evolutionary and breeding perspectives. Understanding these biophysical interactions prompts an exciting research path on fruit development and breeding.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://doi.org/10.1101/2022.04.14.488418",
            "authors": "Erik J. Am&eacute;zquita, Michelle Y. Quigley, Tim Ophelders, Danelle Seymour, Elizabeth Munch, and Daniel H. Chitwood",
            "bibtex": "@article{Amezquita2022,<br> author = {Erik J. Am{\\'{e}}zquita and Michelle Y. Quigley and Tim Ophelders and Danelle Seymour and Elizabeth Munch and Daniel H. Chitwood},<br> doi = {10.1002/ppp3.10333},<br> eprint = {10.1101/2022.04.14.488418},<br> eprinttype = {bioRxiv},<br> journal = {Plants, People, Planet},<br> month = {sep},<br> publisher = {Wiley},<br> title = {The shape of aroma: Measuring and modeling citrus oil gland distribution},<br> year = {2022}<br>}<br>",
            "collapseLabel": "Amezquita2022",
            "date": 2022,
            "image": "../img/Amezquita2022.png",
            "keywords": [
                "Plants"
            ],
            "publishedLink": "https://doi.org/10.1002/ppp3.10333",
            "title": "The shape of aroma: Measuring and modeling citrus oil gland distribution",
            "venue": "Plants, People, Planet"
        },
        {
            "abstract": "We study the probabilistic convergence between the mapper graph and the Reeb graph of a topological space $ \\mathbbX$  equipped with a continuous function $f: \\mathbbX \\to \\mathbbR$. We first give a categorification of the mapper graph and the Reeb graph by interpreting them in terms of cosheaves and stratified covers of the real line $\\mathbbR$. We then introduce a variant of the classic mapper graph of Singh et al., referred to as the enhanced mapper graph, and demonstrate that such a construction approximates the Reeb graph of $(\\mathbbX, f)$ when it is applied to points randomly sampled from a probability density function concentrated on $(\\mathbbX, f)$. Our techniques are based on the interleaving distance of constructible cosheaves and topological estimation via kernel density estimates. Following Munch and Wang, we first show that the mapper graph of $(\\mathbbX, f)$, a constructible $\\mathbbR$-space (with a fixed open cover), approximates the Reeb graph of the same space. We then construct an isomorphism between the mapper of $(\\mathbbX, f)$ to the mapper of a super-level set of a probability density function concentrated on $(\\mathbbX, f)$. Finally, building on the approach of Bobrowski et al., we show that, with high probability, we can recover the mapper of the super-level set given a sufficiently large sample. Our work is the first to consider the mapper construction using the theory of cosheaves in a probabilistic setting. It is part of an ongoing effort to combine sheaf theory, probability, and statistics, to support topological data analysis with random data.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1909.03488v1",
            "authors": "Adam Brown, Omer Bobrowski, Elizabeth Munch, and Bei Wang",
            "bibtex": "@article{Brown2020,<br> author = {Adam Brown and Omer Bobrowski and Elizabeth Munch and Bei Wang},<br> doi = {10.1007/s41468-020-00063-x},<br> eprint = {1909.03488v1},<br> eprinttype = {arXiv},<br> journal = {Journal of Applied and Computational Topology},<br> month = {dec},<br> publisher = {Springer Science and Business Media {LLC}},<br> title = {Probabilistic convergence and stability of random mapper graphs},<br> year = {2021}<br>}<br>",
            "collapseLabel": "Brown2020",
            "date": 2021,
            "image": "../img/Brown2019_enhanced-mapper-revisited.png",
            "keywords": [
                "Graph",
                "Interleaving"
            ],
            "publishedLink": "https://doi.org/10.1007/s41468-020-00063-x",
            "title": "Probabilistic convergence and stability of random mapper graphs",
            "venue": "Journal of Applied and Computational Topology"
        },
        {
            "abstract": "In this paper, we introduce an extension of smoothing on Reeb graphs, which we call truncated smoothing; this in turn allows us to define a new family of metrics which generalize the interleaving distance for Reeb graphs. Intuitively, we \"chop off\" parts near local minima and maxima during the course of smoothing, where the amount cut is controlled by a parameter $\\tau$. After formalizing truncation as a functor, we show that when applied after the smoothing functor, this prevents extensive expansion of the range of the function, and yields particularly nice properties (such as maintaining connectivity) when combined with smoothing for $0 \\leq \\tau \\leq 2\\varepsilon$, where $\\varepsilon$ is the smoothing parameter. Then, for the restriction of $\\tau \\in [0,\\varepsilon]$, we have additional structure which we can take advantage of to construct a categorical flow for any choice of slope $m \\in [0,1]$. Using the infrastructure built for a category with a flow, this then gives an interleaving distance for every $m \\in [0,1]$, which is a generalization of the original interleaving distance, which is the case $m=0$. While the resulting metrics are not stable, we show that any pair of these for $m,m' \\in [0,1)$ are strongly equivalent metrics, which in turn gives stability of each metric up to a multiplicative constant. We conclude by discussing implications of this metric within the broader family of metrics for Reeb graphs.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2007.07795",
            "authors": "Erin Wolf Chambers, Elizabeth Munch, and Tim Ophelders",
            "bibtex": "@inproceedings{Chambers2020,<br> address = {Dagstuhl, Germany},<br> author = {Erin Wolf Chambers and Elizabeth Munch and Tim Ophelders},<br> booktitle = {37th International Symposium on Computational Geometry (SoCG 2021)},<br> creationdate = {2020-07-20T00:00:00},<br> doi = {10.4230/LIPIcs.SoCG.2021.22},<br> editor = {Buchin, Kevin and Colin de Verdi\\`{e}re, \\'{E}ric},<br> eprint = {2007.07795},<br> eprintclass = {cs.CG},<br> eprinttype = {arXiv},<br> isbn = {978-3-95977-184-9},<br> issn = {1868-8969},<br> pages = {22:1--22:17},<br> publisher = {Schloss Dagstuhl -- Leibniz-Zentrum f{\\\"u}r Informatik},<br> series = {Leibniz International Proceedings in Informatics (LIPIcs)},<br> title = {A Family of Metrics from the Truncated Smoothing of {R}eeb Graphs},<br> url = {https://drops.dagstuhl.de/opus/volltexte/2021/13821},<br> urn = {urn:nbn:de:0030-drops-138218},<br> volume = {189},<br> year = {2021}<br>}<br>",
            "collapseLabel": "Chambers2020",
            "date": 2021,
            "image": "../img/Chambers2020.png",
            "keywords": [
                "Interleaving",
                "Graph"
            ],
            "publishedLink": "https://doi.org/10.4230/LIPIcs.SoCG.2021.22",
            "title": "A Family of Metrics from the Truncated Smoothing of Reeb Graphs",
            "venue": "37th International Symposium on Computational Geometry (SoCG 2021)"
        },
        {
            "abstract": "Exposing architectural concepts to modern AI/ML methods requires succinct representations that can capture the essential relationship between adjacent architectural elements in design samples. We explore various examples of topological spaces\u2014from rudimentary graphs to richer closure-finite weak topology (CW)-complexes\u2014and how they can be used to model architectural design samples. We then argue how AI concepts developed for graphs can be naturally extended to more general topological spaces with the following goals in mind: (1) finding salient building-block substructures that occur consistently in highly rated designs; (2) unearthing latent design rules from data by characterizing the space of designs using graph representation learning followed by topological dimensionality reduction; and (3) generating novel designs\u2014given training design samples\u2014using generative adversarial networks applied to graphs. Our preliminary results on the application of AI/ML on graphs are based on the architectural design data from Arcbazar, an online crowdsourcing platform for architectural designs.",
            "altText": "A figure from the paper.",
            "authors": "Prithwish Basu, Imdat As, and Elizabeth Munch",
            "bibtex": "@incollection{Basu2021,<br> author = {Prithwish Basu and Imdat As and Elizabeth Munch},<br> booktitle = {The Routledge Companion to Artificial Intelligence in Architecture},<br> publisher = {Taylor Francis},<br> title = {Generating new architectural designs using topological AI},<br> url = {https://www.taylorfrancis.com/chapters/edit/10.4324/9780367824259-11/generating-new-architectural-designs-using-topological-ai-prithwish-basu-imdat-elizabeth-munch},<br> year = {2021}<br>}<br>",
            "collapseLabel": "Basu2021",
            "date": 2021,
            "image": "../img/Basu2021.png",
            "keywords": [],
            "publishedLink": "https://www.taylorfrancis.com/chapters/edit/10.4324/9780367824259-11/generating-new-architectural-designs-using-topological-ai-prithwish-basu-imdat-elizabeth-munch",
            "title": "Generating new architectural designs using topological AI",
            "venue": "The Routledge Companion to Artificial Intelligence in Architecture"
        },
        {
            "abstract": "The Reeb graph has been utilized in various applications including the analysis of scalar fields. Recently, research has been focused on using topological signatures such as the Reeb graph to compare multiple scalar fields by defining distance metrics on the topological signatures themselves. Here we survey five existing metrics that have been defined on Reeb graphs: the bottleneck distance, the interleaving distance, functional distortion distance, the Reeb graph edit distance, and the universal edit distance. Our goal is to (1) provide definitions and concrete examples of these distances in order to develop the intuition of the reader, (2) visit previously proven results of stability, universality, and discriminativity, (3) identify and complete any remaining properties which have only been proven (or disproven) for a subset of these metrics, (4) expand the taxonomy of the bottleneck distance to better distinguish between variations which have been commonly miscited, and (5) reconcile the various definitions and requirements on the underlying spaces for these metrics to be defined and properties to be proven.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2110.05631",
            "authors": "Brian Bollen, Erin Wolf Chambers, Joshua Levine, and Elizabeth Munch",
            "bibtex": "@article{Bollen2021,<br> archiveprefix = {arXiv},<br> author = {Brian Bollen and Erin Wolf Chambers and Joshua Levine and Elizabeth Munch},<br> eprint = {2110.05631},<br> primaryclass = {cs.CG},<br> title = {Reeb Graph Metrics from the Ground Up},<br> year = {2021}<br>}<br>",
            "collapseLabel": "Bollen2021",
            "date": 2021,
            "image": "../img/Bollen2021.png",
            "keywords": [
                "Intro",
                "Interleaving",
                "Graph"
            ],
            "title": "Reeb Graph Metrics from the Ground Up",
            "venue": "arXiv:2110.05631"
        },
        {
            "abstract": "Shape plays a fundamental role in biology. Traditional phenotypic analysis methods measure some features but fail to measure the information embedded in shape comprehensively. To extract, compare and analyse this information embedded in a robust and concise way, we turn to topological data analysis (TDA), specifically the Euler characteristic transform. TDA measures shape comprehensively using mathematical representations based on algebraic topology features. To study its use, we compute both traditional and topological shape descriptors to quantify the morphology of 3121 barley seeds scanned with X-ray computed tomography (CT) technology at 127 \u03bcm resolution. The Euler characteristic transform measures shape by analysing topological features of an object at thresholds across a number of directional axes. A Kruskal\u2013Wallis analysis of the information encoded by the topological signature reveals that the Euler characteristic transform picks up successfully the shape of the crease and bottom of the seeds. Moreover, while traditional shape descriptors can cluster the seeds based on their accession, topological shape descriptors can cluster them further based on their panicle. We then successfully train a support vector machine to classify 28 different accessions of barley based exclusively on the shape of their grains. We observe that combining both traditional and topological descriptors classifies barley seeds better than using just traditional descriptors alone. This improvement suggests that TDA is thus a powerful complement to traditional morphometrics to comprehensively describe a multitude of \u2018hidden\u2019 shape nuances which are otherwise not detected.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://doi.org/10.1101/2021.03.27.437348",
            "authors": "Erik J Am&eacute;zquita, Michelle Y Quigley, Tim Ophelders, Jacob B. Landis, Daniel Koenig, Elizabeth Munch, and Daniel H Chitwood",
            "bibtex": "@article{Amezquita2021,<br> author = {Erik J Am{\\'{e}}zquita and Michelle Y Quigley and Tim Ophelders and Jacob B. Landis and Daniel Koenig and Elizabeth Munch and Daniel H Chitwood},<br> doi = {10.1093/insilicoplants/diab033},<br> eprint = {10.1101/2021.03.27.437348},<br> eprinttype = {bioRxiv},<br> journal = {in silico Plants},<br> month = {dec},<br> publisher = {Oxford University Press ({OUP})},<br> title = {Measuring hidden phenotype: Quantifying the shape of barley seeds using the Euler Characteristic Transform},<br> year = {2021}<br>}<br>",
            "collapseLabel": "Amezquita2021",
            "date": 2021,
            "image": "../img/Amezquita2021.png",
            "keywords": [
                "Plants",
                "DirTrans"
            ],
            "publishedLink": "https://doi.org/10.1093/insilicoplants/diab033",
            "title": "Measuring hidden phenotype: Quantifying the shape of barley seeds using the Euler Characteristic Transform",
            "venue": "in silico Plants"
        },
        {
            "abstract": "The diurnal cycle of tropical cyclones (TCs) is a daily cycle in clouds that appears in satellite images and may have implications for TC structure and intensity. The diurnal pattern can be seen in infrared (IR) satellite imagery as cyclical pulses in the cloud field that propagate radially outward from the center of nearly all Atlantic-basin TCs. These diurnal pulses, a distinguishing characteristic of the TC diurnal cycle, begin forming in the storm's inner core near sunset each day and appear as a region of cooling cloud-top temperatures. The area of cooling takes on a ring-like appearance as cloud-top warming occurs on its inside edge and the cooling moves away from the storm overnight, reaching several hundred kilometers from the circulation center by the following afternoon. The state-of-the-art TC diurnal cycle measurement has a limited ability to analyze the behavior beyond qualitative observations. We present a method for quantifying the TC diurnal cycle using one-dimensional persistent homology, a tool from Topological Data Analysis, by tracking maximum persistence and quantifying the cycle using the discrete Fourier transform. Using Geostationary Operational Environmental Satellite IR imagery data from Hurricane Felix (2007), our method is able to detect an approximate daily cycle.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1902.06202",
            "authors": "Sarah Tymochko, Elizabeth Munch, Jason Dunion, Kristen Corbosiero, and Ryan Torn",
            "bibtex": "@article{Tymochko2019,<br> author = {Sarah Tymochko and Elizabeth Munch and Jason Dunion and Kristen Corbosiero and Ryan Torn},<br> creationdate = {2019-02-19T00:00:00},<br> doi = {10.1016/j.patrec.2020.02.022},<br> eprint = {1902.06202},<br> eprinttype = {arXiv},<br> issn = {0167-8655},<br> journal = {Pattern Recognition Letters},<br> month = {May},<br> pages = {137-143},<br> publisher = {North-Holland},<br> title = {Using Persistent Homology to Quantify a Diurnal Cycle in Hurricane Felix},<br> volume = {133},<br> year = {2020}<br>}<br>",
            "collapseLabel": "Tymochko2019",
            "date": 2020,
            "image": "../img/Tymochko2019_difference_ex.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.1016/j.patrec.2020.02.022",
            "title": "Using Persistent Homology to Quantify a Diurnal Cycle in Hurricane Felix",
            "venue": "Pattern Recognition Letters"
        },
        {
            "abstract": "Shape is data and data is shape. Biologists are accustomed to thinking about how the shape of biomolecules, cells, tissues, and organisms arise from the effects of genetics, development, and the environment. Less often do we consider that data itself has shape and structure, or that it is possible to measure the shape of data and analyze it. Here, we review applications of topological data analysis (TDA) to biology in a way accessible to biologists and applied mathematicians alike. TDA uses principles from algebraic topology to comprehensively measure shape in data sets. Using a function that relates the similarity of data points to each other, we can monitor the evolution of topological features\u2014connected components, loops, and voids. This evolution, a topological signature, concisely summarizes large, complex data sets. We first provide a TDA primer for biologists before exploring the use of TDA across biological sub\u2010disciplines, spanning structural biology, molecular biology, evolution, and development. We end by comparing and contrasting different TDA approaches and the potential for their use in biology. The vision of TDA, that data are shape and shape is data, will be relevant as biology transitions into a data\u2010driven era where the meaningful interpretation of large data sets is a limiting factor.",
            "altText": "A figure from the paper.",
            "authors": "Erik J. Am&eacute;zquita, Michelle Y. Quigley, Tim Ophelders, Elizabeth Munch, and Daniel H. Chitwood",
            "bibtex": "@article{Amezquita2020,<br> author = {Erik J. Am{\\'{e}}zquita and Michelle Y. Quigley and Tim Ophelders and Elizabeth Munch and Daniel H. Chitwood},<br> creationdate = {2020-07-02T00:00:00},<br> doi = {10.1002/dvdy.175},<br> journal = {Developmental Dynamics},<br> month = {apr},<br> publisher = {Wiley},<br> title = {The shape of things to come: Topological data analysis and biology, from molecules to organisms},<br> year = {2020}<br>}<br>",
            "collapseLabel": "Amezquita2020",
            "date": 2020,
            "image": "../img/Amezquita2020-cover.jpg",
            "keywords": [
                "Intro",
                "Plants"
            ],
            "publishedLink": "https://doi.org/10.1002/dvdy.175",
            "title": "The shape of things to come: Topological data analysis and biology, from molecules to organisms",
            "venue": "Developmental Dynamics"
        },
        {
            "abstract": "Bifurcations in dynamical systems characterize qualitative changes in the system behavior. Therefore, their detection is important because they can signal the transition from normal system operation to imminent failure. While standard persistent homology has been used in this setting, it usually requires analyzing a collection of persistence diagrams, which in turn drives up the computational cost considerably. Using zigzag persistence, we can capture topological changes in the state space of the dynamical system in only one persistence diagram. Here we present Bifurcations using ZigZag (BuZZ), a one-step method to study and detect bifurcations using zigzag persistence. The BuZZ method is successfully able to detect this type of behavior in two synthetic examples as well as an example dynamical system.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2009.08972",
            "authors": "Sarah Tymochko, Elizabeth Munch, and Firas A. Khasawneh",
            "bibtex": "@article{Tymochko2020,<br> author = {Sarah Tymochko and Elizabeth Munch and Firas A. Khasawneh},<br> doi = {10.3390/a13110278},<br> eprint = {2009.08972},<br> eprinttype = {arXiv},<br> journal = {Algorithms},<br> number = {11},<br> pages = {278},<br> title = {Using Zigzag Persistent Homology to Detect Hopf Bifurcations in Dynamical Systems},<br> volume = {13},<br> year = {2020}<br>}<br>",
            "collapseLabel": "Tymochko2020",
            "date": 2020,
            "image": "../img/Tymochko2020.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.3390/a13110278",
            "title": "Using Zigzag Persistent Homology to Detect Hopf Bifurcations in Dynamical Systems",
            "venue": "Algorithms"
        },
        {
            "abstract": "While the spatial topological persistence is naturally constructed from a radius-based filtration, it has hardly been derived from a temporal filtration. Most topological models are designed for the global topology of a given object as a whole. There is no method reported in the literature for the topology of an individual component in an object to the best of our knowledge. For many problems in science and engineering, the topology of an individual component is important for describing its properties. We propose evolutionary homology (EH) constructed via a time evolution-based filtration and topological persistence. Our approach couples a set of dynamical systems or chaotic oscillators by the interactions of a physical system, such as a macromolecule. The interactions are approximated by weighted graph Laplacians. Simplices, simplicial complexes, algebraic groups and topological persistence are defined on the coupled trajectories of the chaotic oscillators. The resulting EH gives rise to time-dependent topological invariants or evolutionary barcodes for an individual component of the physical system, revealing its topology-function relationship. In conjunction with Wasserstein metrics, the proposed EH is applied to protein flexibility analysis, an important problem in computational biophysics. Numerical results for the B-factor prediction of a benchmark set of 364 proteins indicate that the proposed EH outperforms all the other state-of-the-art methods in the field.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1802.04677",
            "authors": "Zixuan Cang, Elizabeth Munch, and Guo-Wei Wei",
            "bibtex": "@article{Cang2020,<br> author = {Zixuan Cang and Elizabeth Munch and Guo-Wei Wei},<br> creationdate = {2020-07-14T00:00:00},<br> doi = {10.1007/s41468-020-00057-9},<br> eprint = {1802.04677},<br> eprinttype = {arXiv},<br> journal = {Journal of Applied and Computational Topology},<br> month = {jul},<br> publisher = {Springer Science and Business Media {LLC}},<br> title = {Evolutionary homology on coupled dynamical systems with applications to protein flexibility analysis},<br> year = {2020}<br>}<br>",
            "collapseLabel": "Cang2020",
            "date": 2020,
            "image": "../img/Cang2018-Disordered_Small.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.1007/s41468-020-00057-9",
            "title": "Evolutionary homology on coupled dynamical systems with applications to protein flexibility analysis",
            "venue": "Journal of Applied and Computational Topology"
        },
        {
            "abstract": "The emerging field of topological signal processing brings methods from Topological Data Analysis (TDA) to create new tools for signal processing by incorporating aspects of shape. In this paper, we present an overview of the python package, which brings together available software for computing persistent homology, the main workhorse of TDA, with modules that expand the functionality of as a state-of-the-art topological signal processing tool. These modules methods for incorporating tools from machine learning, complex networks,, and parameter selection along with a dynamical systems library to the creation and benchmarking of new methods. All code is open source up to date documentation, making the code easy to use, in particular for signal experts with limited experience in topological methods.",
            "altText": "A figure from the paper.",
            "authors": "Audun D. Myers, Melih Yesilli, Sarah Tymochko, Firas Khasawneh, and Elizabeth Munch",
            "bibtex": "@conference{Myers2020,<br> author = {Audun D. Myers and Melih Yesilli and Sarah Tymochko and Firas Khasawneh and Elizabeth Munch},<br> booktitle = {Topological Data Analysis and Beyond Workshop at NeurIPS 2020},<br> title = {Teaspoon: A comprehensive python package for topological signal processing},<br> url = {https://openreview.net/pdf?id=qUoVqrIcy2P},<br> year = {2020}<br>}<br>",
            "collapseLabel": "Myers2020",
            "date": 2020,
            "image": "../img/teaspoon.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://openreview.net/pdf?id=qUoVqrIcy2P",
            "title": "Teaspoon: A comprehensive python package for topological signal processing",
            "venue": "Topological Data Analysis and Beyond Workshop at NeurIPS 2020"
        },
        {
            "abstract": "Tree ring widths are an important source of climatic and historical data, but measuring these widths typically requires extensive manual work. Computer vision techniques provide promising directions towards the automation of tree ring detection, but most automated methods still require a substantial amount of user interaction to obtain high accuracy. We perform analysis on 3D X-ray CT images of a cross-section of a tree trunk, known as a tree disk. We present novel automated methods for locating the pith (center) of a tree disk, and ring boundaries. Our methods use a combination of standard image processing techniques and tools from topological data analysis. We evaluate the efficacy of our method for two different CT scans by comparing its results to manually located rings and centers and show that it is better than current automatic methods in terms of correctly counting each ring and its location. Our methods have several parameters, which we optimize experimentally by minimizing edit distances to the manually obtained locations.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2010.08691",
            "authors": "Kayla Makela, Tim Ophelders, Michelle Quigley, Elizabeth Munch, Daniel Chitwood, and Asia Dowtin",
            "bibtex": "@article{Makela2020,<br> author = {Kayla Makela and Tim Ophelders and Michelle Quigley and Elizabeth Munch and Daniel Chitwood and Asia Dowtin},<br> date = {2020-10-17},<br> eprint = {2010.08691},<br> eprintclass = {cs.CV},<br> eprinttype = {arXiv},<br> title = {Automatic Tree Ring Detection using Jacobi Sets}<br>}<br>",
            "collapseLabel": "Makela2020",
            "date": 2020,
            "image": "../img/Makela2020_TreeCookies.png",
            "keywords": [
                "Graph",
                "Interleaving"
            ],
            "title": "Automatic Tree Ring Detection using Jacobi Sets",
            "venue": "arXiv:2010.08691"
        },
        {
            "abstract": "The interleaving distance, although originally developed for persistent homology, has been generalized to measure the distance between functors modeled on many posets or even small categories. Existing theories require that such a poset have a superlinear family of translations or a similar structure. However, many posets of interest to topological data analysis, such as zig-zag posets and the face relation poset of a cell-complex, do not admit interesting translations, and consequently don't admit a nice theory of interleavings. In this paper we show how one can side-step this limitation by providing a general theory where one maps to a poset that does admit interesting translations, such as the lattice of down sets, and then defines interleavings relative to this map. Part of our theory includes a rigorous notion of discretization or \"pixelization\" of poset modules, which in turn we use for interleaving inference. We provide an approximation condition that in the setting of lattices gives rise to two possible pixelizations, both of which are guaranteed to be close in the interleaving distance. Finally, we conclude by considering interleaving inference for cosheaves over a metric space and give an explicit description of interleavings over a grid structure on Euclidean space.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/2004.14286",
            "authors": "Magnus Bakke Botnan, Justin Curry, and Elizabeth Munch",
            "bibtex": "@article{Botnan2020,<br> author = {Magnus Bakke Botnan and Justin Curry and Elizabeth Munch},<br> date = {2020-04-29},<br> eprint = {2004.14286},<br> eprintclass = {math.CT},<br> eprinttype = {arXiv},<br> title = {A Relative Theory of Interleavings}<br>}<br>",
            "collapseLabel": "Botnan2020",
            "date": 2020,
            "image": "../img/Botnan2020.png",
            "keywords": [
                "Interleaving"
            ],
            "title": "A Relative Theory of Interleavings",
            "venue": "arXiv:2004.14286"
        },
        {
            "abstract": "Mapper is a topological construction similar to a Reeb graph, and is used to summarize the shape of a dataset as a (generalized) graph. Formally, mapper can be constructed for any connected space and algorithms have been developed to compute mapper for point clouds and 2D images. In this paper, we extend mapper to 3D volumetric images. We use our algorithm to compute mapper for scans of barley generated using computed tomography. We demonstrate the flexibility of the construction by highlighting different aspects of the morphology through different choices of starting parameters. Applying mapper to this type of data provides an integrated means of visualization, segmentation and clustering, and can thus be used to study the topology of any 3D object.",
            "altText": "A figure from the paper.",
            "authors": "Daniel H. Chitwood, Mitchell Eithun, Elizabeth Munch, and Tim Ophelders",
            "bibtex": "@inproceedings{Chitwood2019,<br> author = {Daniel H. Chitwood and Mitchell Eithun and Elizabeth Munch and Tim Ophelders},<br> booktitle = {ISMM 2019: Mathematical Morphology and Its Applications to Signal and Image Processing},<br> doi = {10.1007/978-3-030-20867-7_7},<br> editor = {Burgeth, Bernhard and Kleefeld, Andreas and Naegel, Beno{\\^i}t and Passat, Nicolas and Perret, Benjamin},<br> pages = {84--95},<br> priority = {prio1},<br> publisher = {Springer International Publishing},<br> title = {Topological Mapper for {3D} Volumetric Images},<br> year = {2019}<br>}<br>",
            "collapseLabel": "Chitwood2019",
            "date": 2019,
            "image": "../img/Chitwood2019_mapper_flowchart.png",
            "keywords": [
                "Plants",
                "Graph"
            ],
            "publishedLink": "https://doi.org/10.1007/978-3-030-20867-7_7",
            "title": "Topological Mapper for 3D Volumetric Images",
            "venue": "ISMM 2019: Mathematical Morphology and Its Applications to Signal and Image Processing"
        },
        {
            "abstract": "Epicormic branches arise from dormant buds patterned during the growth of previous years. Dormant epicormic buds remain on the surface of trees, pushed outward from the pith during secondary growth, but maintaining vascular connections. Epicormic buds can be reactivated, either through natural processes or intentionally, to rejuvenate orchards and control tree architecture. Because epicormic structures are embedded within secondary growth, tomographic approaches are a useful method to study them and understand their development. We apply techniques from image processing to determine the locations of epicormic vascular traces embedded within secondary growth of sweet cherry (Prunus avium L.), revealing the juvenile phyllotactic pattern in the trunk of an adult tree. Techniques include breadth-first search to find the pith of the tree, edge detection to approximate the radius, and a conversion to polar coordinates to threshold and segment phyllotactic features. Intensity values from Magnetic Resonance Imaging (MRI) of the trunk are projected onto the surface of a perfect cylinder to find the locations of traces in the \"boundary image\". Mathematical phyllotaxy provides a means to capture the patterns in the boundary image by modeling phyllotactic parameters. Our cherry tree specimen has the conspicuous parastichy pair $(2,3)$, phyllotactic fraction 2/5, and divergence angle of approximately 143 degrees. The methods described not only provide a framework to study phyllotaxy, but for image processing of volumetric image data in plants. Our results have practical implications for orchard rejuvenation and directed approaches to influence tree architecture. The study of epicormic structures, which are hidden within secondary growth, using tomographic methods also opens the possibility of studying the genetic and environmental basis of such structures.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1812.03321",
            "authors": "Mitchell Eithun, Daniel H. Chitwood, James Larson, Gregory Lang, and Elizabeth Munch",
            "bibtex": "@article{Eithun2018,<br> author = {Mitchell Eithun and Daniel H. Chitwood and James Larson and Gregory Lang and Elizabeth Munch},<br> creationdate = {2020-06-28T00:00:00},<br> doi = {10.1186/s13007-019-0496-7},<br> eprint = {1812.03321},<br> eprinttype = {arXiv},<br> journal = {Plant Methods},<br> month = {oct},<br> number = {1},<br> publisher = {Springer Science and Business Media {LLC}},<br> readstatus = {skimmed},<br> title = {Isolating phyllotactic patterns embedded in the secondary growth of sweet cherry (Prunus avium L.) using magnetic resonance imaging},<br> volume = {15},<br> year = {2019}<br>}<br>",
            "collapseLabel": "Eithun2018",
            "date": 2019,
            "image": "../img/Eithun2018_Anatomy.png",
            "keywords": [
                "Plants"
            ],
            "publishedLink": "https://doi.org/10.1186/s13007-019-0496-7",
            "title": "Isolating phyllotactic patterns embedded in the secondary growth of sweet cherry (Prunus avium L.) using magnetic resonance imaging",
            "venue": "Plant Methods"
        },
        {
            "abstract": "There are many metrics available to compare phylogenetic trees since this is a fundamental task in computational biology. In this paper, we focus on one such metric, the $\\ell^\\infty$-cophenetic metric introduced by Cardona et al. This metric works by representing a phylogenetic tree with $n$ labeled leaves as a point in  $\\mathbbR^n(n+1)/2$  known as the cophenetic vector, then comparing the two resulting Euclidean points using the $\\ell^\\infty$ distance. Meanwhile, the interleaving distance is a formal categorical construction generalized from the definition of Chazal et al., originally introduced to compare persistence modules arising from the field of topological data analysis. We show that the $\\ell^\\infty$-cophenetic metric is an example of an interleaving distance. To do this, we define phylogenetic trees as a category of merge trees with some additional structure, namely, labelings on the leaves plus a requirement that morphisms respect these labels. Then we can use the definition of a flow on this category to give an interleaving distance. Finally, we show that, because of the additional structure given by the categories defined, the map sending a labeled merge tree to the cophenetic vector is, in fact, an isometric embedding, thus proving that the $\\ell^\\infty$-cophenetic metric is an interleaving distance.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1803.07609",
            "authors": "Elizabeth Munch and Anastasios Stefanou",
            "bibtex": "@incollection{Munch2019,<br> author = {Elizabeth Munch and Anastasios Stefanou},<br> booktitle = {Research in Data Science},<br> creationdate = {2020-06-28T00:00:00},<br> doi = {10.1007/978-3-030-11566-1_5},<br> eprint = {1803.07609},<br> eprinttype = {arXiv},<br> pages = {109--127},<br> priority = {prio1},<br> publisher = {Springer International Publishing},<br> series = {Association for Women in Mathematics Series},<br> title = {The $\\ell^\\infty$-Cophenetic Metric for Phylogenetic Trees As an Interleaving Distance},<br> year = {2019}<br>}<br>",
            "collapseLabel": "Munch2019",
            "date": 2019,
            "image": "../img/Munch2018_LabeledMergeTree.png",
            "keywords": [
                "Interleaving",
                "Graph"
            ],
            "publishedLink": "https://doi.org/10.1007/978-3-030-11566-1_5",
            "title": "The $\\ell^\\infty$-Cophenetic Metric for Phylogenetic Trees As an Interleaving Distance",
            "venue": "Research in Data Science"
        },
        {
            "abstract": "Physical phenomena in science and engineering are frequently modeled using scalar fields. In scalar field topology, graph-based topological descriptors such as merge trees, contour trees, and Reeb graphs are commonly used to characterize topological changes in the (sub)level sets of scalar fields. One of the biggest challenges and opportunities to advance topology-based visualization is to understand and incorporate uncertainty into such topological descriptors to effectively reason about their underlying data. In this paper, we study a structural average of a set of labeled merge trees and use it to encode uncertainty in data. Specifically, we compute a 1-center tree that minimizes its maximum distance to any other tree in the set under a well-defined metric called the interleaving distance. We provide heuristic strategies that compute structural averages of merge trees whose labels do not fully agree. We further provide an interactive visualization system that resembles a numerical calculator that takes as input a set of merge trees and outputs a tree as their structural average. We also highlight structural similarities between the input and the average and incorporate uncertainty information for visual exploration. We develop a novel measure of uncertainty, referred to as consistency, via a metric-space view of the input trees. Finally, we demonstrate an application of our framework through merge trees that arise from ensembles of scalar fields. Our work is the first to employ interleaving distances and consistency to study a global, mathematically rigorous, structural average of merge trees in the context of uncertainty visualization.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1908.00113",
            "authors": "Lin Yan, Yusu Wang, Elizabeth Munch, Ellen Gasparovic, and Bei Wang",
            "bibtex": "@article{Yan2019a,<br> author = {Lin Yan and Yusu Wang and Elizabeth Munch and Ellen Gasparovic and Bei Wang},<br> creationdate = {2020-06-28T00:00:00},<br> doi = {10.1109/tvcg.2019.2934242},<br> eprint = {1908.00113},<br> eprinttype = {arXiv},<br> journal = {{IEEE} Transactions on Visualization and Computer Graphics},<br> pages = {1--1},<br> publisher = {Institute of Electrical and Electronics Engineers ({IEEE})},<br> title = {A Structural Average of Labeled Merge Trees for Uncertainty Visualization},<br> year = {2019}<br>}<br>",
            "collapseLabel": "Yan2019a",
            "date": 2019,
            "image": "../img/Yan2019_interface-4.png",
            "keywords": [
                "Graph",
                "Interleaving"
            ],
            "publishedLink": "https://doi.org/10.1109/tvcg.2019.2934242",
            "title": "A Structural Average of Labeled Merge Trees for Uncertainty Visualization",
            "venue": "IEEE Transactions on Visualization and Computer Graphics"
        },
        {
            "abstract": "Chatter detection has become a prominent subject of interest due to its effect on cutting tool life, surface finish and spindle of machine tool. Most of the existing methods in chatter detection literature are based on signal processing and signal decomposition. In this study, we use topological features of data simulating cutting tool vibrations, combined with four supervised machine learning algorithms to diagnose chatter in the milling process. Persistence diagrams, a method of representing topological features, are not easily used in the context of machine learning, so they must be transformed into a form that is more amenable. Specifically, we will focus on two different methods for featurizing persistence diagrams, Carlsson coordinates and template functions. In this paper, we provide classification results for simulated data from various cutting configurations, including upmilling and downmilling, in addition to the same data with some added noise. Our results show that Carlsson Coordinates and Template Functions yield accuracies as high as 96% and 95%, respectively. We also provide evidence that these topological methods are noise robust descriptors for chatter detection.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1910.12359",
            "authors": "Melih C. Yesilli, Sarah Tymochko, Firas A. Khasawneh, and Elizabeth Munch",
            "bibtex": "@article{Yesilli2019,<br> author = {Melih C. Yesilli and Sarah Tymochko and Firas A. Khasawneh and Elizabeth Munch},<br> creationdate = {2019-10-29T00:00:00},<br> doi = {10.1109/ICMLA.2019.00200},<br> eprint = {1910.12359},<br> eprinttype = {arXiv},<br> journal = {2019 18th IEEE International Conference On Machine Learning And Applications (ICMLA)},<br> title = {Chatter Diagnosis in Milling Using Supervised Learning and Topological Features Vector},<br> year = {2019}<br>}<br>",
            "collapseLabel": "Yesilli2019",
            "date": 2019,
            "image": "../img/Yesilli2019.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.1109/ICMLA.2019.00200",
            "title": "Chatter Diagnosis in Milling Using Supervised Learning and Topological Features Vector",
            "venue": "2019 18th IEEE International Conference On Machine Learning And Applications (ICMLA)"
        },
        {
            "abstract": "As the field of Topological Data Analysis continues to show success in theory and in applications, there has been increasing interest in using tools from this field with methods for machine learning. Using persistent homology, specifically persistence diagrams, as inputs to machine learning techniques requires some mathematical creativity. The space of persistence diagrams does not have the desirable properties for machine learning, thus methods such as kernel methods and vectorization methods have been developed. One such featurization of persistence diagrams by Perea, Munch and Khasawneh uses continuous, compactly supported functions, referred to as \"template functions,\" which results in a stable vector representation of the persistence diagram. In this paper, we provide a method of adaptively partitioning persistence diagrams to improve these featurizations based on localized information in the diagrams. Additionally, we provide a framework to adaptively select parameters required for the template functions in order to best utilize the partitioning method. We present results for application to example data sets comparing classification results between template function featurizations with and without partitioning, in addition to other methods from the literature.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1910.08506",
            "authors": "Sarah Tymochko, Elizabeth Munch, and Firas A. Khasawneh",
            "bibtex": "@article{Tymochko2019a,<br> author = {Sarah Tymochko and Elizabeth Munch and Firas A. Khasawneh},<br> creationdate = {2019-10-29T00:00:00},<br> doi = {10.1109/ICMLA.2019.00202},<br> eprint = {1910.08506},<br> eprinttype = {arXiv},<br> journal = {2019 18th IEEE International Conference On Machine Learning And Applications (ICMLA)},<br> title = {Adaptive Partitioning for Template Functions on Persistence Diagrams},<br> year = {2019}<br>}<br>",
            "collapseLabel": "Tymochko2019a",
            "date": 2019,
            "image": "../img/Tymochko2019a_Dgms_all_partitioned_split1.png",
            "keywords": [
                "ML"
            ],
            "publishedLink": "https://doi.org/10.1109/ICMLA.2019.00202",
            "title": "Adaptive Partitioning for Template Functions on Persistence Diagrams",
            "venue": "2019 18th IEEE International Conference On Machine Learning And Applications (ICMLA)"
        },
        {
            "abstract": "In this paper we develop a novel Topological Data Analysis (TDA) approach for studying graph representations of time series of dynamical systems. Specifically, we show how persistent homology, a tool from TDA, can be used to yield a compressed, multi-scale representation of the graph that can distinguish between dynamic states such as periodic and chaotic behavior. We show the approach for two graph constructions obtained from the time series. In the first approach the time series is embedded into a point cloud which is then used to construct an undirected $k$-nearest neighbor graph. The second construct relies on the recently developed ordinal partition framework. In either case, a pairwise distance matrix is then calculated using the shortest path between the graph's nodes, and this matrix is utilized to define a filtration of a simplicial complex that enables tracking the changes in homology classes over the course of the filtration. These changes are summarized in a persistence diagram---a two-dimensional summary of changes in the topological features. We then extract existing as well as new geometric and entropy point summaries from the persistence diagram and compare to other commonly used network characteristics. Our results show that persistence-based point summaries yield a clearer distinction of the dynamic behavior and are more robust to noise than existing graph-based scores, especially when combined with ordinal graphs.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1904.07403",
            "authors": "Audun Myers, Elizabeth Munch, and Firas A. Khasawneh",
            "bibtex": "@article{Myers2019,<br> author = {Audun Myers and Elizabeth Munch and Firas A. Khasawneh},<br> creationdate = {2020-06-09T00:00:00},<br> doi = {10.1103/PhysRevE.100.022314},<br> eprint = {1904.07403},<br> eprinttype = {arXiv},<br> journal = {Physical Review E},<br> month = {aug},<br> number = {2},<br> pages = {022314},<br> publisher = {American Physical Society ({APS})},<br> title = {Persistent Homology of Complex Networks for Dynamic State Detection},<br> volume = {100},<br> year = {2019}<br>}<br>",
            "collapseLabel": "Myers2019",
            "date": 2019,
            "image": "../img/Myers2019_chaotic_vs_periodic.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.1103/PhysRevE.100.022314",
            "title": "Persistent Homology of Complex Networks for Dynamic State Detection",
            "venue": "Physical Review E"
        },
        {
            "abstract": "Chatter identification and detection in machining processes has been an active area of research in the past two decades. Part of the challenge in studying chatter is that machining equations that describe its occurrence are often nonlinear delay differential equations. The majority of the available tools for chatter identification rely on defining a metric that captures the characteristics of chatter, and a threshold that signals its occurrence. The difficulty in choosing these parameters can be somewhat alleviated by utilizing machine learning techniques. However, even with a successful classification algorithm, the transferability of typical machine learning methods from one data set to another remains very limited. In this paper we combine supervised machine learning with Topological Data Analysis (TDA) to obtain a descriptor of the process which can detect chatter. The features we use are derived from the persistence diagram of an attractor reconstructed from the time series via Takens embedding. We test the approach using deterministic and stochastic turning models, where the stochasticity is introduced via the cutting coefficient term. Our results show a 97% successful classification rate on the deterministic model labeled by the stability diagram obtained using the spectral element method. The features gleaned from the deterministic model are then utilized for characterization of chatter in a stochastic turning model where there are very limited analysis methods.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1804.02261",
            "authors": "Firas A. Khasawneh, Elizabeth Munch, and Jose A. Perea",
            "bibtex": "@inproceedings{Khasawneh2018a,<br> author = {Firas A. Khasawneh and Elizabeth Munch and Jose A. Perea},<br> booktitle = {14th IFAC Workshop on Time Delay Systems TDS 2018: Budapest, Hungary, 28\u201330 June 2018},<br> creationdate = {2018-09-01T00:00:00},<br> doi = {10.1016/j.ifacol.2018.07.222},<br> editor = {Tamas Insperger},<br> eprint = {1804.02261},<br> eprinttype = {arXiv},<br> number = {14},<br> pages = {195--200},<br> priority = {prio1},<br> readstatus = {read},<br> title = {Chatter Classification in Turning Using Machine Learning and Topological Data Analysis},<br> volume = {51},<br> year = {2018}<br>}<br>",
            "collapseLabel": "Khasawneh2018a",
            "date": 2018,
            "image": "../img/Khasawneh2018a-ChatterPredict-0p05-normalized-WithLine_Small.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.1016/j.ifacol.2018.07.222",
            "title": "Chatter Classification in Turning Using Machine Learning and Topological Data Analysis",
            "venue": "14th IFAC Workshop on Time Delay Systems TDS 2018: Budapest, Hungary, 28\u201330 June 2018"
        },
        {
            "abstract": "This paper introduces a simple yet powerful approach based on topological data analysis for detecting true steps in a periodic, piecewise constant (PWC) signal. The signal is a two-state square wave with randomly varying in-between-pulse spacing, subject to spurious steps at the rising or falling edges which we call digital ringing. We use persistent homology to derive mathematical guarantees for the resulting change detection which enables accurate identification and counting of the true pulses. The approach is tested using both synthetic and experimental data obtained using an engine lathe instrumented with a laser tachometer. The described algorithm enables accurate and automatic calculations of the spindle speed without any choice of parameters. The results are compared with the frequency and sequency methods of the Fourier and Walsh\u2013Hadamard transforms, respectively. Both our approach and the Fourier analysis yield comparable results for pulses with regular spacing and digital ringing while the latter causes large errors using the Walsh\u2013Hadamard method. Further, the described approach significantly outperforms the frequency/sequency analyses when the spacing between the peaks is varied. We discuss generalizing the approach to higher dimensional PWC signals, although using this extension remains an interesting question for future research.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1805.06403",
            "authors": "Firas A. Khasawneh and Elizabeth Munch",
            "bibtex": "@article{Khasawneh2018b,<br> author = {Firas A. Khasawneh and Elizabeth Munch},<br> creationdate = {2018-10-03T00:00:00},<br> doi = {10.1098/rspa.2018.0027},<br> eprint = {1805.06403},<br> eprinttype = {arXiv},<br> journal = {Proceedings of the Royal Society A: Mathematical, Physical and Engineering Science},<br> month = {oct},<br> number = {2218},<br> pages = {20180027},<br> priority = {prio1},<br> publisher = {The Royal Society},<br> readstatus = {read},<br> title = {Topological data analysis for true step detection in periodic piecewise constant signals},<br> volume = {474},<br> year = {2018}<br>}<br>",
            "collapseLabel": "Khasawneh2018b",
            "date": 2018,
            "image": "../img/Khasawneh2018b_ExampleSubsetsPulseTrain.jpg",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.1098/rspa.2018.0027",
            "title": "Topological data analysis for true step detection in periodic piecewise constant signals",
            "venue": "Proceedings of the Royal Society A: Mathematical, Physical and Engineering Science"
        },
        {
            "abstract": "The interleaving distance was originally defined in the field of Topological Data Analysis (TDA) by Chazal et al. as a metric on the class of persistence modules parametrized over the real line. Bubenik et al. subsequently extended the definition to categories of functors on a poset, the objects in these categories being regarded as `generalized persistence modules'. These metrics typically depend on the choice of a lax semigroup of endomorphisms of the poset. The purpose of the present paper is to develop a more general framework for the notion of interleaving distance using the theory of `actegories'. Specifically, we extend the notion of interleaving distance to arbitrary categories equipped with a flow, i.e. a lax monoidal action by the monoid $[0,\\infty)$. In this way, the class of objects in such a category acquires the structure of a Lawvere metric space. Functors that are colax $[0,\\infty)$-equivariant yield maps that are 1-Lipschitz. This leads to concise proofs of various known stability results from TDA, by considering appropriate colax $[0,\\infty)$-equivariant functors. Along the way, we show that several common metrics, including the Hausdorff distance and the $L^\\infty$-norm, can be realized as interleaving distances in this general perspective.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1706.04095",
            "authors": "Vin de Silva, Elizabeth Munch, and Anastasios Stefanou",
            "bibtex": "@article{deSilva2018,<br> author = {{de Silva}, Vin and Munch, Elizabeth and Anastasios Stefanou},<br> creationdate = {2018-06-06T00:00:00},<br> eprint = {1706.04095},<br> eprinttype = {arXiv},<br> journal = {Theory and Applications of Categories},<br> number = {21},<br> pages = {583-607},<br> priority = {prio2},<br> title = {Theory of interleavings on categories with a flow},<br> url = {http://www.tac.mta.ca/tac/volumes/33/21/33-21.pdf},<br> volume = {33},<br> year = {2018}<br>}<br>",
            "collapseLabel": "deSilva2018",
            "date": 2018,
            "image": "../img/deSilva2018_Pentagon_Small.png",
            "keywords": [
                "Interleaving"
            ],
            "publishedLink": "http://www.tac.mta.ca/tac/volumes/33/21/33-21.pdf",
            "title": "Theory of interleavings on categories with a flow",
            "venue": "Theory and Applications of Categories"
        },
        {
            "abstract": "Persistence diagrams are a useful tool from topological data analysis which can be used to provide a concise description of a filtered topological space. What makes them even more useful in practice is that they come with a notion of a metric, the Wasserstein distance (closely related to but not the same as the homonymous metric from probability theory). Further, this metric provides a notion of stability; that is, small noise in the input causes at worst small differences in the output. In this paper, we show that the Wasserstein distance for persistence diagrams can be computed through quantum annealing. We provide a formulation of the problem as a Quadratic Unconstrained Binary Optimization problem, or QUBO, and prove correctness. Finally, we test our algorithm, exploring parameter choices and problem size capabilities, using a D-Wave 2000Q quantum annealing computer.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1809.06433",
            "authors": "Jesse J. Berwald, Joel M. Gottlieb, and Elizabeth Munch",
            "bibtex": "@article{Berwald2018,<br> author = {Jesse J. Berwald and Joel M. Gottlieb and Elizabeth Munch},<br> date = {2018-09-17},<br> eprint = {1809.06433},<br> eprintclass = {cs.CG, cs.ET, quant-ph},<br> eprinttype = {arXiv},<br> title = {Computing Wasserstein Distance for Persistence Diagrams on a Quantum Computer}<br>}<br>",
            "collapseLabel": "Berwald2018",
            "date": 2018,
            "image": "../img/Berwald2018_QUBO_Coefficients.png",
            "keywords": [
                "Pers"
            ],
            "title": "Computing Wasserstein Distance for Persistence Diagrams on a Quantum Computer",
            "venue": "arXiv:1809.06433"
        },
        {
            "abstract": "This chapter describes a new approach for studying the stability of stochastic delay equations by investigating their time series using topological data analysis (TDA). The approach is illustrated utilizing two stochastic delay equations. The first model equation is the stochastic version of Hayes equation--a scalar autonomous delay equation--where the noise is an additive term. The second model equation is the stochastic version of Mathieu\u2019s equation--a time-periodic delay equation. In the latter, noise is added via a multiplicative term in the time-periodic coefficient. The time series is generated using Euler\u2013Maruyama method and a corresponding point cloud is obtained using the Takens\u2019 embedding. The point cloud is then analyzed using a tool from TDA known as persistent homology. The results of this study show that the described approach can be used for analyzing datasets of delay dynamical systems that are described using constant as well as time-periodic coefficients. The presented approach can be used for signals generated from both\nnumerical simulation and experiments. It can be used as a tool to study the stability of stochastic delay equations for which there are currently a limited number of analysis tools.",
            "altText": "A figure from the paper.",
            "authors": "Firas A. Khasawneh and Elizabeth Munch",
            "bibtex": "@inbook{Khasawneh2017,<br> address = {Cham},<br> author = {Khasawneh, Firas A. and Munch, Elizabeth},<br> booktitle = {Time Delay Systems: Theory, Numerics, Applications, and Experiments},<br> creationdate = {2018-05-30T00:00:00},<br> doi = {10.1007/978-3-319-53426-8_7},<br> editor = {Insperger, Tam{\\'a}s and Ersal, Tulga and Orosz, G{\\'a}bor},<br> pages = {93--106},<br> publisher = {Springer International Publishing},<br> readstatus = {read},<br> title = {Utilizing Topological Data Analysis for Studying Signals of Time-Delay Systems},<br> year = {2017}<br>}<br>",
            "collapseLabel": "Khasawneh2017",
            "date": 2017,
            "image": "../img/Khasawneh2017-MaxPers-Mathieu-0p01_Small.jpg",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.1007/978-3-319-53426-8_7",
            "title": "Utilizing Topological Data Analysis for Studying Signals of Time-Delay Systems",
            "venue": "Time Delay Systems: Theory, Numerics, Applications, and Experiments"
        },
        {
            "abstract": "Topological data analysis (TDA) is a collection of powerful tools that can quantify shape and structure in data in order to answer questions from the data's domain. This is done by representing some aspect of the structure of the data in a simplified topological signature. In this article, we introduce two of the most commonly used topological signatures. First, the persistence diagram represents loops and holes in the space by considering connectivity of the data points for a continuum of values rather than a single fixed value. The second topological signature, the mapper graph, returns a 1-dimensional structure representing the shape of the data, and is particularly good for exploration and visualization of the data. While these techniques are based on very sophisticated mathematics, the current ubiquity of available software means that these tools are more accessible than ever to be applied to data by researchers in education and learning, as well as all domain scientists.",
            "altText": "A figure from the paper.",
            "authors": "Elizabeth Munch",
            "bibtex": "@article{Munch2017,<br> author = {Elizabeth Munch},<br> creationdate = {2018-05-30T00:00:00},<br> doi = {10.18608/jla.2017.42.6},<br> journal = {Journal of Learning Analytics},<br> number = {2},<br> priority = {prio2},<br> readstatus = {read},<br> title = {A User's Guide to Topological Data Analysis},<br> volume = {4},<br> year = {2017}<br>}<br>",
            "collapseLabel": "Munch2017",
            "date": 2017,
            "image": "../img/Munch2017_MapperEx.png",
            "keywords": [
                "Intro"
            ],
            "publishedLink": "https://doi.org/10.18608/jla.2017.42.6",
            "title": "A User's Guide to Topological Data Analysis",
            "venue": "Journal of Learning Analytics"
        },
        {
            "abstract": "This paper describes a new approach for ascertaining the stability of stochastic dynamical systems in their parameter space by examining their time series using topological data analysis (TDA). We illustrate the approach using a nonlinear delayed model that describes the tool oscillations due to self-excited vibrations in turning. Each time series is generated using the Euler-Maruyama method and a corresponding point cloud is obtained using the Takens embedding. The point cloud can then be analyzed using a tool from TDA known as persistent homology. The results of this study show that the described approach can be used for analyzing datasets of delay dynamical systems generated both from numerical simulation and experimental data. The contributions of this paper include presenting for the first time a topological approach for investigating the stability of a class of nonlinear stochastic delay equations, and introducing a new application of TDA to machining processes.",
            "altText": "A figure from the paper.",
            "authors": "Firas A. Khasawneh and Elizabeth Munch",
            "bibtex": "@article{Khasawneh2015,<br> author = {Firas A. Khasawneh and Elizabeth Munch},<br> creationdate = {2017-06-14T00:00:00},<br> doi = {10.1016/j.ymssp.2015.09.046},<br> issn = {0888-3270},<br> journal = {Mechanical Systems and Signal Processing},<br> month = {mar},<br> pages = {527--541},<br> publisher = {Elsevier {BV}},<br> title = {Chatter detection in turning using persistent homology},<br> volume = {70-71},<br> year = {2016}<br>}<br>",
            "collapseLabel": "Khasawneh2015",
            "date": 2016,
            "image": "../img/Khasawneh2015_MaxPersNoNoise_Small.jpg",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.1016/j.ymssp.2015.09.046",
            "title": "Chatter detection in turning using persistent homology",
            "venue": "Mechanical Systems and Signal Processing"
        },
        {
            "abstract": "The Reeb graph is a construction which originated in Morse theory to study a real-valued function defined on a topological space. More recently, it has been used in various applications to study noisy data which creates a desire to define a measure of similarity between these structures. Here, we exploit the fact that the category of Reeb graphs is equivalent to the category of a particular class of cosheaf. Using this equivalency, we can define an `interleaving' distance between Reeb graphs which is stable under the perturbation of a function. Along the way, we obtain a natural construction for smoothing a Reeb graph to reduce its topological complexity. The smoothed Reeb graph can be constructed in polynomial time.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1501.04147",
            "authors": "Vin de Silva, Elizabeth Munch, and Amit Patel",
            "bibtex": "@article{deSilva2016b,<br> author = {{de Silva}, Vin and Munch, Elizabeth and Patel, Amit},<br> doi = {10.1007/s00454-016-9763-9},<br> eprint = {1501.04147},<br> eprinttype = {arXiv},<br> issn = {1432-0444},<br> journal = {Discrete \\& Computational Geometry},<br> pages = {1--53},<br> title = {Categorified Reeb Graphs},<br> year = {2016}<br>}<br>",
            "collapseLabel": "deSilva2016b",
            "date": 2016,
            "image": "../img/deSilva2016_cosheafCondition_Small.png",
            "keywords": [
                "Graph",
                "Interleaving"
            ],
            "publishedLink": "https://doi.org/10.1007/s00454-016-9763-9",
            "title": "Categorified Reeb Graphs",
            "venue": "Discrete & Computational Geometry"
        },
        {
            "abstract": "The Reeb space, which generalizes the notion of a Reeb graph, is one of the few tools in topological data analysis and visualization suitable for the study of multivariate scientific datasets. First introduced by Edelsbrunner et al. (Edelsbrunner et al. 2008), it compresses the components of the level sets of a multivariate mapping and obtains a summary representation of their relationships. A related construction called the mapper (Singh et al. 2007), and a special case of mapper called the Joint Contour Net (Carr et al. 2014) have been shown to be effective in visual analytics. Mapper and JCN are intuitively regarded as discrete approximations of the Reeb space, however without formal proofs or approximation guarantees. An open question has been proposed by Dey et al. (Dey et al. 2015) as to whether the mapper converges to the Reeb space in the limit. \nIn this paper, we are interested in developing the theoretical understanding of the relationship between the Reeb space and its discrete approximations to support its use in practical data analysis. Using tools from category theory, we formally prove the convergence between the Reeb space and mapper in terms of an interleaving distance between their categorical representations. Given a sequence of refined discretizations, we prove that these approximations converge to the Reeb space in the interleaving distance; this also helps to quantify the approximation quality of the discretization at a fixed resolution.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1512.04108",
            "authors": "Elizabeth Munch and Bei Wang",
            "bibtex": "@inproceedings{Munch2016,<br> address = {Dagstuhl, Germany},<br> author = {Elizabeth Munch and Bei Wang},<br> booktitle = {32nd International Symposium on Computational Geometry (SoCG 2016)},<br> doi = {10.4230/LIPIcs.SoCG.2016.53},<br> editor = {S{\\'a}ndor Fekete and Anna Lubiw},<br> eprint = {1512.04108},<br> eprinttype = {arXiv},<br> isbn = {978-3-95977-009-5},<br> issn = {1868-8969},<br> pages = {53:1--53:16},<br> publisher = {Schloss Dagstuhl--Leibniz-Zentrum fuer Informatik},<br> series = {Leibniz International Proceedings in Informatics (LIPIcs)},<br> title = {Convergence between Categorical Representations of {R}eeb Space and {M}apper},<br> urn = {urn:nbn:de:0030-drops-59454},<br> volume = {51},<br> year = {2016}<br>}<br>",
            "collapseLabel": "Munch2016",
            "date": 2016,
            "image": "../img/Munch2016_Mapper-converge-Full_Small.png",
            "keywords": [
                "Graph",
                "Interleaving"
            ],
            "publishedLink": "https://doi.org/10.4230/LIPIcs.SoCG.2016.53",
            "title": "Convergence between Categorical Representations of Reeb Space and Mapper",
            "venue": "32nd International Symposium on Computational Geometry (SoCG 2016)"
        },
        {
            "abstract": "This paper introduces a method to integrate target behavior into the multiple hypothesis tracker (MHT) likelihood ratio. In particular, a periodic track appraisal based on behavior is introduced. The track appraisal uses elementary topological data analysis coupled with basic machine-learning techniques, and it adjusts the traditional kinematic data association likelihood (i.e., track score) using an established formulation for feature-aided data association. The proposed method is tested and demonstrated on synthetic vehicular data representing an urban traffic scene generated by the Simulation of Urban Mobility package. The vehicles in the scene exhibit different driving behaviors. The proposed method distinguishes those behaviors and shows improved data association decisions relative to a conventional, kinematic MHT.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1406.0214",
            "authors": "Paul Bendich, Sang Peter Chin, Jesse Clark, Jonathan Desena, John Harer, Elizabeth Munch, Andrew Newman, David Porter, David Rouse, Nate Strawn, and Adam Watkins",
            "bibtex": "@article{Bendich2016,<br> author = {Paul Bendich and Sang Peter Chin and Jesse Clark and Jonathan Desena and John Harer and Elizabeth Munch and Andrew Newman and David Porter and David Rouse and Nate Strawn and Adam Watkins},<br> creationdate = {2017-06-14T00:00:00},<br> doi = {10.1109/taes.2016.160405},<br> eprint = {1406.0214},<br> eprinttype = {arXiv},<br> journal = {{IEEE} Transactions on Aerospace and Electronic Systems},<br> month = {dec},<br> number = {6},<br> pages = {2644--2661},<br> publisher = {Institute of Electrical and Electronics Engineers ({IEEE})},<br> title = {Topological and statistical behavior classifiers for tracking applications},<br> volume = {52},<br> year = {2016}<br>}<br>",
            "collapseLabel": "Bendich2016",
            "date": 2016,
            "image": "../img/Bendich2016.gif",
            "keywords": [],
            "publishedLink": "https://doi.org/10.1109/taes.2016.160405",
            "title": "Topological and statistical behavior classifiers for tracking applications",
            "venue": "IEEE Transactions on Aerospace and Electronic Systems"
        },
        {
            "abstract": "The Reeb graph is a construction that studies a topological space through the lens of a real valued function. It has been commonly used in applications, however its use on real data means that it is desirable and increasingly necessary to have methods for comparison of Reeb graphs. Recently, several metrics on the set of Reeb graphs have been proposed. In this paper, we focus on two: the functional distortion distance and the interleaving distance. The former is based on the Gromov-Hausdorff distance, while the latter utilizes the equivalence between Reeb graphs and a particular class of cosheaves. However, both are defined by constructing a near-isomorphism between the two graphs of study. In this paper, we show that the two metrics are strongly equivalent on the space of Reeb graphs. Our result also implies the bottleneck stability for persistence diagrams in terms of the Reeb graph interleaving distance.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1412.6646",
            "authors": "Ulrich Bauer, Elizabeth Munch, and Yusu Wang",
            "bibtex": "@inproceedings{Bauer2015b,<br> address = {Dagstuhl, Germany},<br> author = {Ulrich Bauer and Elizabeth Munch and Yusu Wang},<br> booktitle = {31st International Symposium on Computational Geometry (SoCG 2015)},<br> creationdate = {2017-06-14T00:00:00},<br> doi = {10.4230/LIPIcs.SOCG.2015.461},<br> editor = {Lars Arge and J{\\'a}nos Pach},<br> eprint = {1412.6646},<br> eprinttype = {arXiv},<br> pages = {461--475},<br> publisher = {Schloss Dagstuhl--Leibniz-Zentrum fuer Informatik},<br> series = {Leibniz International Proceedings in Informatics (LIPIcs)},<br> title = {{Strong Equivalence of the Interleaving and Functional Distortion Metrics for Reeb Graphs}},<br> volume = {34},<br> year = {2015}<br>}<br>",
            "collapseLabel": "Bauer2015b",
            "date": 2015,
            "image": "../img/Bauer2015b_SmoothingReebGraph-DeltaMap.png",
            "keywords": [
                "Graph",
                "Interleaving"
            ],
            "publishedLink": "https://doi.org/10.4230/LIPIcs.SOCG.2015.461",
            "title": "Strong Equivalence of the Interleaving and Functional Distortion Metrics for Reeb Graphs",
            "venue": "31st International Symposium on Computational Geometry (SoCG 2015)"
        },
        {
            "abstract": "In order to use persistence diagrams as a true statistical tool,it would be very useful to have a good notion of mean and variance for a set of diagrams. In [23], Mileyko and his collaborators made the first study of the properties of the Fr\u00e9chet mean in $(D_p , W_p )$, the space of persistence diagrams equipped with the p-th Wasserstein metric. In particular, they showed that the Fr\u00e9chet mean of a finite set of diagrams always exists, but is not necessarily unique. The means of a continuously-varying\nset of diagrams do not themselves (necessarily) vary continuously, which presents obvious problems when trying to extend the Fr&eacute;chet mean definition to the realm of time-varying persistence diagrams, better known as vineyards.\n\nWe fix this problem by altering the original definition of Fr&eacute;chet mean so that it now becomes a probability measure on the set of persistence diagrams; in a nutshell, the mean of a set of diagrams will be a weighted sum of atomic measures, where each atom is itself a persistence diagram determined using a perturbation of the input diagrams. This definition gives for each N a map $(D _p )^N \\rightarrow P(D_ p )$. We show that this map is Hoelder continuous on finite diagrams and thus can be used to build a useful statistic on vineyards.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1307.6530",
            "authors": "Elizabeth Munch, Katharine Turner, Paul Bendich, Sayan Mukherjee, Jonathan Mattingly, and John Harer",
            "bibtex": "@article{Munch2015,<br> author = {Munch, Elizabeth and Turner, Katharine and Bendich, Paul and Mukherjee, Sayan and Mattingly, Jonathan and Harer, John},<br> creationdate = {2017-06-14T00:00:00},<br> doi = {10.1214/15-EJS1030},<br> eprint = {1307.6530},<br> eprinttype = {arXiv},<br> fjournal = {Electronic Journal of Statistics},<br> journal = {Electron. J. Statist.},<br> pages = {1173--1204},<br> publisher = {The Institute of Mathematical Statistics and the Bernoulli Society},<br> title = {Probabilistic Fr\\'echet means for time varying persistence diagrams},<br> volume = {9},<br> year = {2015}<br>}<br>",
            "collapseLabel": "Munch2015",
            "date": 2015,
            "image": "../img/Munch2015_PersistenceDiagram-GroupingDraw.png",
            "keywords": [
                "Pers"
            ],
            "publishedLink": "https://doi.org/10.1214/15-EJS1030",
            "title": "Probabilistic Fr&eacute;chet means for time varying persistence diagrams",
            "venue": "Electron. J. Statist."
        },
        {
            "abstract": "This paper introduces a method to integrate target behavior into the multiple hypothesis tracker (MHT) likelihood ratio. In particular, a periodic track appraisal based on behavior is introduced that uses elementary topological data analysis coupled with basic machine learning techniques. The track appraisal adjusts the traditional kinematic data association likelihood (i.e., track score) using an established formulation for classification-aided data association. The proposed method is tested and demonstrated on synthetic vehicular data representing an urban traffic scene generated by the Simulation of Urban Mobility package. The vehicles in the scene exhibit different driving behaviors. The proposed method distinguishes those behaviors and shows improved data association decisions relative to a conventional, kinematic MHT.",
            "altText": "A figure from the paper.",
            "authors": "David Rouse, Adam Watkins, David Porter, John Harer, Paul Bendich, Nate Strawn, Elizabeth Munch, Jonathan DeSena, Jesse Clarke, Jeffrey Gilbert, Peter Chin, and Andrew Newman",
            "bibtex": "@inproceedings{Rouse2015,<br> author = {Rouse, David and Watkins, Adam and Porter, David and Harer, John and Bendich, Paul and Strawn, Nate and Munch, Elizabeth and DeSena, Jonathan and Clarke, Jesse and Gilbert, Jeffrey and Chin, Peter and Newman, Andrew},<br> booktitle = {Proc. SPIE},<br> doi = {10.1117/12.2179555},<br> pages = {94740L-94740L-12},<br> title = {Feature-aided multiple hypothesis tracking using topological and statistical behavior classifiers},<br> volume = {9474},<br> year = {2015}<br>}<br>",
            "collapseLabel": "Rouse2015",
            "date": 2015,
            "image": "../img/Rouse2015_Small.jpg",
            "keywords": [],
            "publishedLink": "https://doi.org/10.1117/12.2179555",
            "title": "Feature-aided multiple hypothesis tracking using topological and statistical behavior classifiers",
            "venue": "Proc. SPIE"
        },
        {
            "abstract": "This paper explores the possibility of using techniques from topological data analysis for studying datasets generated from dynamical systems described by stochastic delay equations. The dataset is generated using Euler-Maryuama simulation for two first order systems with stochastic parameters drawn from a normal distribution. The first system contains additive noise whereas the second one contains parametric or multiplicative noise. Using Taken's embedding, the dataset is converted into a point cloud in a high-dimensional space. Persistent homology is then employed to analyze the structure of the point cloud in order to study equilibria and periodic solutions of the underlying system. Our results show that the persistent homology successfully differentiates between different types of equilibria. Therefore, we believe this approach will prove useful for automatic data analysis of vibration measurements. For example, our approach can be used in machining processes for chatter detection and prevention.",
            "altText": "A figure from the paper.",
            "authors": "Firas A. Khasawneh and Elizabeth Munch",
            "bibtex": "@inproceedings{Khasawneh2014,<br> author = {Firas A. Khasawneh and Elizabeth Munch},<br> booktitle = {Proceedings of the ASME 2014 International Design Engineering Technical Conferences \\& Computers and Information in Engineering Conference, August 17-20, 2014, Buffalo, NY, USA},<br> doi = {10.1115/DETC2014-35655},<br> title = {Exploring equilibria in stochastic delay differential equations using persistent homology},<br> year = {2014}<br>}<br>",
            "collapseLabel": "Khasawneh2014",
            "date": 2014,
            "image": "../img/Khasawneh2014_OverlaidPersistence-Delta-0p10.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.1115/DETC2014-35655",
            "title": "Exploring equilibria in stochastic delay differential equations using persistent homology",
            "venue": "Proceedings of the ASME 2014 International Design Engineering Technical Conferences & Computers and Information in Engineering Conference, August 17-20, 2014, Buffalo, NY, USA"
        },
        {
            "abstract": "This paper describes a new approach for ascertaining the stability of autonomous stochastic delay equations in their parameter space by examining their time series using topological data analysis. We use a nonlinear model that describes the tool oscillations due to self-excited vibrations in turning. The time series is generated using Euler-Maruyama method and then is turned into a point cloud in a high dimensional Euclidean space using the delay embedding. The point cloud can then be analyzed using persistent homology. Specifically, in the deterministic case, the system has a stable fixed point while the loss of stability is associated with Hopf bifurcation whereby a limit cycle branches from the fixed point. Since periodicity in the signal translates into circularity in the point cloud, the persistence diagram associated to the periodic time series will have a high persistence point. This can be used to determine a threshold criteria that can automatically classify the system behavior based on its time series. The results of this study show that the described approach can be used for analyzing datasets of delay dynamical systems generated both from numerical simulation and experimental data.",
            "altText": "A figure from the paper.",
            "authors": "Firas A. Khasawneh and Elizabeth Munch",
            "bibtex": "@inproceedings{Khasawneh2014a,<br> author = {Firas A. Khasawneh and Elizabeth Munch},<br> booktitle = {Proceedings of the ASME 2014 International Mechanical Engineering Congress \\& Exposition, Montreal, Canada},<br> doi = {10.1115/IMECE2014-40221},<br> title = {Stability Determiniation in Turning using Persistent Homology and Time Series Analysis},<br> year = {2014}<br>}<br>",
            "collapseLabel": "Khasawneh2014a",
            "date": 2014,
            "image": "../img/Khasawneh2014a_Boat-NoNoise-pcolor_Small.png",
            "keywords": [
                "TSP"
            ],
            "publishedLink": "https://doi.org/10.1115/IMECE2014-40221",
            "title": "Stability Determiniation in Turning using Persistent Homology and Time Series Analysis",
            "venue": "Proceedings of the ASME 2014 International Mechanical Engineering Congress & Exposition, Montreal, Canada"
        },
        {
            "abstract": "In this paper we consider the question of sensor network coverage for a two-dimensional domain. We seek to compute the probability that a set of sensors fails to cover given only non-metric, local (who is talking to whom) information and a probability distribution of failure of each node. This builds on the work of de Silva and Ghrist who analyzed this problem in the deterministic situation. We first show that it is part of a slightly larger class of problems which is #P-hard, and thus fast algorithms likely do not exist unless P $=$ NP. The question of whether the specific problem is, in fact, #P-hard remains open. We then give a deterministic algorithm which is feasible in the case of a small set of sensors, and give a dynamic algorithm for an arbitrary set of sensors failing over time which utilizes a new criterion for coverage to give an early warning of potential failure. These algorithms build on the theory of topological persistence.",
            "altText": "A figure from the paper.",
            "arXivLink": "https://arxiv.org/abs/1109.6535",
            "authors": "Elizabeth Munch, Michael Shapiro, and John Harer",
            "bibtex": "@article{Munch2012,<br> author = {Munch, Elizabeth and Shapiro, Michael and Harer, John},<br> creationdate = {2017-06-14T00:00:00},<br> doi = {10.1177/0278364912451671},<br> eprint = {1109.6535},<br> eprinttype = {arXiv},<br> journal = {The International Journal of Robotics Research},<br> number = {9},<br> pages = {1044-1056},<br> title = {Failure filtrations for fenced sensor networks},<br> volume = {31},<br> year = {2012}<br>}<br>",
            "collapseLabel": "Munch2012",
            "date": 2012,
            "image": "../img/Munch2012_Domain09.png",
            "keywords": [],
            "publishedLink": "https://doi.org/10.1177/0278364912451671",
            "title": "Failure filtrations for fenced sensor networks",
            "venue": "The International Journal of Robotics Research"
        },
        {
            "altText": "A figure from the paper.",
            "authors": "Elizabeth Munch and C. Douglas Haessig",
            "bibtex": "@article{Munch2008,<br> author = {Elizabeth Munch and C. Douglas Haessig},<br> journal = {Journal for Undergraduate Research, University of Rochester},<br> title = {Counting prime paths in fractals built from triangles},<br> url = {http://hdl.handle.net/1802/10490},<br> year = {2008}<br>}<br>",
            "collapseLabel": "Munch2008",
            "date": 2008,
            "image": "../img/Munch2008.png",
            "keywords": [],
            "publishedLink": "http://hdl.handle.net/1802/10490",
            "title": "Counting prime paths in fractals built from triangles",
            "venue": "Journal for Undergraduate Research, University of Rochester"
        }
    ]
}