document.addEventListener("DOMContentLoaded", function() {
    const subjects = [{
            label: "",
            options: [""]
        },
        {
            label: "Biology",
            options: [{
                    value: "Biology (Animal Behavior and Cognition)",
                    label: "Animal Behavior and Cognition"
                },
                {
                    value: "Biology (Biochemistry)",
                    label: "Biochemistry"
                },
                {
                    value: "Biology (Bioengineering)",
                    label: "Bioengineering"
                },
                {
                    value: "Biology (Bioinformatics)",
                    label: "Bioinformatics"
                },
                {
                    value: "Biology (Biophysics)",
                    label: "Biophysics"
                },
                {
                    value: "Biology (Cancer Biology)",
                    label: "Cancer Biology"
                },
                {
                    value: "Biology (Cell Biology)",
                    label: "Cell Biology"
                },
                {
                    value: "Biology (Clinical Trials)",
                    label: "Clinical Trials"
                },
                {
                    value: "Biology (Developmental Biology)",
                    label: "Developmental Biology"
                },
                {
                    value: "Biology (Ecology)",
                    label: "Ecology"
                },
                {
                    value: "Biology (Epidemiology)",
                    label: "Epidemiology"
                },
                {
                    value: "Biology (Evolutionary Biology)",
                    label: "Evolutionary Biology"
                },
                {
                    value: "Biology (Genetics)",
                    label: "Genetics"
                },
                {
                    value: "Biology (Genomics)",
                    label: "Genomics"
                },
                {
                    value: "Biology (Immunology)",
                    label: "Immunology"
                },
                {
                    value: "Biology (Microbiology)",
                    label: "Microbiology"
                },
                {
                    value: "Biology (Molecular Biology)",
                    label: "Molecular Biology"
                },
                {
                    value: "Biology (Neuroscience)",
                    label: "Neuroscience"
                },
                {
                    value: "Biology (Paleontology)",
                    label: "Paleontology"
                },
                {
                    value: "Biology (Pathology)",
                    label: "Pathology"
                },
                {
                    value: "Biology (Pharmacology and Toxicology)",
                    label: "Pharmacology and Toxicology"
                },
                {
                    value: "Biology (Physiology)",
                    label: "Physiology"
                },
                {
                    value: "Biology (Plant Biology)",
                    label: "Plant Biology"
                },
                {
                    value: "Biology (Scientific Communication and Education)",
                    label: "Scientific Communication and Education"
                },
                {
                    value: "Biology (Synthetic Biology)",
                    label: "Synthetic Biology"
                },
                {
                    value: "Biology (Systems Biology)",
                    label: "Systems Biology"
                },
                {
                    value: "Biology (Zoology)",
                    label: "Zoology"
                },
            ]
        },
        {
            label: "Computer Science",
            options: [{
                    value: "Computer Science (Artificial Intelligence)",
                    label: "Artificial Intelligence"
                },
                {
                    value: "Computer Science (Computation and Language)",
                    label: "Computation and Language"
                },
                {
                    value: "Computer Science (Computational Complexity)",
                    label: "Computational Complexity"
                },
                {
                    value: "Computer Science (Computational Engineering, Finance, and Science)",
                    label: "Computational Engineering, Finance, and Science"
                },
                {
                    value: "Computer Science (Computational Geometry)",
                    label: "Computational Geometry"
                },
                {
                    value: "Computer Science (Computer Science and Game Theory)",
                    label: "Computer Science and Game Theory"
                },
                {
                    value: "Computer Science (Computer Vision and Pattern Recognition)",
                    label: "Computer Vision and Pattern Recognition"
                },
                {
                    value: "Computer Science (Computers and Society)",
                    label: "Computers and Society"
                },
                {
                    value: "Computer Science (Cryptography and Security)",
                    label: "Cryptography and Security"
                },
                {
                    value: "Computer Science (Data Structures and Algorithms)",
                    label: "Data Structures and Algorithms"
                },
                {
                    value: "Computer Science (Databases)",
                    label: "Databases"
                },
                {
                    value: "Computer Science (Digital Libraries)",
                    label: "Digital Libraries"
                },
                {
                    value: "Computer Science (Discrete Mathematics)",
                    label: "Discrete Mathematics"
                },
                {
                    value: "Computer Science (Distributed, Parallel, and Cluster Computing)",
                    label: "Distributed, Parallel, and Cluster Computing"
                },
                {
                    value: "Computer Science (Emerging Technologies)",
                    label: "Emerging Technologies"
                },
                {
                    value: "Computer Science (Formal Languages and Automata Theory)",
                    label: "Formal Languages and Automata Theory"
                },
                {
                    value: "Computer Science (General Literature)",
                    label: "General Literature"
                },
                {
                    value: "Computer Science (Graphics)",
                    label: "Graphics"
                },
                {
                    value: "Computer Science (Hardware Architecture)",
                    label: "Hardware Architecture"
                },
                {
                    value: "Computer Science (Human-Computer Interaction)",
                    label: "Human-Computer Interaction"
                },
                {
                    value: "Computer Science (Information Retrieval)",
                    label: "Information Retrieval"
                },
                {
                    value: "Computer Science (Information Theory)",
                    label: "Information Theory"
                },
                {
                    value: "Computer Science (Logic in Computer Science)",
                    label: "Logic in Computer Science"
                },
                {
                    value: "Computer Science (Machine Learning)",
                    label: "Machine Learning"
                },
                {
                    value: "Computer Science (Mathematical Software)",
                    label: "Mathematical Software"
                },
                {
                    value: "Computer Science (Multiagent Systems)",
                    label: "Multiagent Systems"
                },
                {
                    value: "Computer Science (Multimedia)",
                    label: "Multimedia"
                },
                {
                    value: "Computer Science (Networking and Internet Architecture)",
                    label: "Networking and Internet Architecture"
                },
                {
                    value: "Computer Science (Neural and Evolutionary Computing)",
                    label: "Neural and Evolutionary Computing"
                },
                {
                    value: "Computer Science (Numerical Analysis)",
                    label: "Numerical Analysis"
                },
                {
                    value: "Computer Science (Operating Systems)",
                    label: "Operating Systems"
                },
                {
                    value: "Computer Science (Other Computer Science)",
                    label: "Other Computer Science"
                },
                {
                    value: "Computer Science (Performance)",
                    label: "Performance"
                },
                {
                    value: "Computer Science (Programming Languages)",
                    label: "Programming Languages"
                },
                {
                    value: "Computer Science (Robotics)",
                    label: "Robotics"
                },
                {
                    value: "Computer Science (Social and Information Networks)",
                    label: "Social and Information Networks"
                },
                {
                    value: "Computer Science (Software Engineering)",
                    label: "Software Engineering"
                },
                {
                    value: "Computer Science (Sound)",
                    label: "Sound"
                },
                {
                    value: "Computer Science (Symbolic Computation)",
                    label: "Symbolic Computation"
                },
                {
                    value: "Computer Science (Systems and Control)",
                    label: "Systems and Control"
                }
            ]
        },
        {
            label: "Data Science",
            options: [{
                    value: "Data Science (Applications)",
                    label: "Applications"
                },
                {
                    value: "Data Science (Computation)",
                    label: "Computation"
                },
                {
                    value: "Data Science (Machine Learning)",
                    label: "Machine Learning"
                },
                {
                    value: "Data Science (Methodology)",
                    label: "Methodology"
                },
                {
                    value: "Data Science (Other Statistics)",
                    label: "Other Statistics"
                },
                {
                    value: "Data Science (Statistics Theory)",
                    label: "Statistics Theory"
                },
            ]
        },
        {
            label: "Economics",
            options: [{
                    value: "Economics (Econometrics)",
                    label: "Econometrics"
                },
                {
                    value: "Economics (General Economics)",
                    label: "General Economics"
                },
                {
                    value: "Economics (Theoretical Economics)",
                    label: "Theoretical Economics"
                },
            ]
        },
        {
            label: "Electrical Engineering and Systems Science",
            options: [{
                    value: "Electrical Engineering and Systems Science (Audio and Speech Processing)",
                    label: "Audio and Speech Processing"
                },
                {
                    value: "Electrical Engineering and Systems Science (Image and Video Processing)",
                    label: "Image and Video Processing"
                },
                {
                    value: "Electrical Engineering and Systems Science (Signal Processing)",
                    label: "Signal Processing"
                },
                {
                    value: "Electrical Engineering and Systems Science (Systems and Control)",
                    label: "Systems and Control"
                },
            ]
        },
        {
            label: "Mathematics",
            options: [{
                    value: "Mathematics (Algebraic Geometry)",
                    label: "Algebraic Geometry"
                },
                {
                    value: "Mathematics (Algebraic Topology)",
                    label: "Algebraic Topology"
                },
                {
                    value: "Mathematics (Analysis of PDEs)",
                    label: "Analysis of PDEs"
                },
                {
                    value: "Mathematics (Category Theory)",
                    label: "Category Theory"
                },
                {
                    value: "Mathematics (Classical Analysis and ODEs)",
                    label: "Classical Analysis and ODEs"
                },
                {
                    value: "Mathematics (Combinatorics)",
                    label: "Combinatorics"
                },
                {
                    value: "Mathematics (Commutative Algebra)",
                    label: "Commutative Algebra"
                },
                {
                    value: "Mathematics (Complex Variables)",
                    label: "Complex Variables"
                },
                {
                    value: "Mathematics (Differential Geometry)",
                    label: "Differential Geometry"
                },
                {
                    value: "Mathematics (Dynamical Systems)",
                    label: "Dynamical Systems"
                },
                {
                    value: "Mathematics (Functional Analysis)",
                    label: "Functional Analysis"
                },
                {
                    value: "Mathematics (General Mathematics)",
                    label: "General Mathematics"
                },
                {
                    value: "Mathematics (General Topology)",
                    label: "Geometric Topology"
                },
                {
                    value: "Mathematics (Group Theory)",
                    label: "Group Theory"
                },
                {
                    value: "Mathematics (History and Overview)",
                    label: "History and Overview"
                },
                {
                    value: "Mathematics (Information Theory)",
                    label: "Information Theory"
                },
                {
                    value: "Mathematics (K-Theory and Homology)",
                    label: "K-Theory and Homology"
                },
                {
                    value: "Mathematics (Logic)",
                    label: "Logic"
                },
                {
                    value: "Mathematics (Mathematical Physics)",
                    label: "Mathematical Physics"
                },
                {
                    value: "Mathematics (Metric Geometry)",
                    label: "Metric Geometry"
                },
                {
                    value: "Mathematics (Number Theory)",
                    label: "Number Theory"
                },
                {
                    value: "Mathematics (Numerical Analysis)",
                    label: "Numerical Analysis"
                },
                {
                    value: "Mathematics (Operator Algebras)",
                    label: "Operator Algebras"
                },
                {
                    value: "Mathematics (Optimization and Control)",
                    label: "Optimization and Control"
                },
                {
                    value: "Mathematics (Probability)",
                    label: "Probability"
                },
                {
                    value: "Mathematics (Quantum Algebra)",
                    label: "Quantum Algebra"
                },
                {
                    value: "Mathematics (Representation Theory)",
                    label: "Representation Theory"
                },
                {
                    value: "Mathematics (Rings and Algebras)",
                    label: "Rings and Algebras"
                },
                {
                    value: "Mathematics (Spectral Theory)",
                    label: "Spectral Theory"
                },
                {
                    value: "Mathematics (Statistics Theory)",
                    label: "Statistics Theory"
                },
                {
                    value: "Mathematics (Symplectic Geometry)",
                    label: "Symplectic Geometry"
                },
            ]
        },
        {
            label: "Physics",
            options: [{
                    value: "Physics (Astrophysics)",
                    label: "Astrophysics"
                },
                {
                    value: "Physics (Condensed Matter)",
                    label: "Condensed Matter"
                },
                {
                    value: "Physics (General Physics)",
                    label: "General Physics"
                },
                {
                    value: "Physics (General Relativity and Quantum Cosmology)",
                    label: "General Relativity and Quantum Cosmology"
                },
                {
                    value: "Physics (High Energy Physics - Experiment)",
                    label: "High Energy Physics - Experiment"
                },
                {
                    value: "Physics (High Energy Physics - Lattice)",
                    label: "High Energy Physics - Lattice"
                },
                {
                    value: "Physics (High Energy Physics - Phenomenology)",
                    label: "High Energy Physics - Phenomenology"
                },
                {
                    value: "Physics (High Energy Physics - Theory)",
                    label: "High Energy Physics - Theory"
                },
                {
                    value: "Physics (Mathematical Physics)",
                    label: "Mathematical Physics"
                },
                {
                    value: "Physics (Nonlinear Sciences)",
                    label: "Nonlinear Sciences"
                },
                {
                    value: "Physics (Nuclear Experiment)",
                    label: "Nuclear Experiment"
                },
                {
                    value: "Physics (Nuclear Theory)",
                    label: "Nuclear Theory"
                },
                {
                    value: "Physics (Quantum Physics)",
                    label: "Quantum Physics"
                },
            ]
        },
        {
            label: "Quantitative Finance",
            options: [{
                    value: "Quantitative Finance (Computational Finance)",
                    label: "Computational Finance"
                },
                {
                    value: "Quantitative Finance (Economics)",
                    label: "Economics"
                },
                {
                    value: "Quantitative Finance (General Finance)",
                    label: "General Finance"
                },
                {
                    value: "Quantitative Finance (Mathematical Finance)",
                    label: "Mathematical Finance"
                },
                {
                    value: "Quantitative Finance (Portfolio Management)",
                    label: "Portfolio Management"
                },
                {
                    value: "Quantitative Finance (Pricing of Securities)",
                    label: "Pricing of Securities"
                },
                {
                    value: "Quantitative Finance (Risk Management)",
                    label: "Risk Management"
                },
                {
                    value: "Quantitative Finance (Statistical Finance)",
                    label: "Statistical Finance"
                },
                {
                    value: "Quantitative Finance (Trading and Market Microstructure)",
                    label: "Trading and Market Microstructure"
                },
            ]
        }
    ];
    const selectElement = document.getElementById('subject');
    subjects.forEach(subject => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = subject.label;

        subject.options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.label;
            optgroup.appendChild(optionElement);
        });

        selectElement.appendChild(optgroup);
    });
});

async function getRecentPreprints() {
    const response = await fetch("https://archive.gd.edu.kg/recent-preprints.json");
    if (response.status !== 200) {
        console.error("Failed to fetch preprints:", response.status);
        return;
    }

    const preprint = await response.json();
    const recentPreprintsElement = document.getElementById('recentPreprints');
    recentPreprintsElement.innerHTML = "";

    const fragment = document.createDocumentFragment();

    const keys = Object.keys(preprint);
    for (let i = 0; i < keys.length; i++) {
        const submissionID = keys[i];
        const details = preprint[submissionID];

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="col-12 article-meta np">
                <div class="article-tag">${details.subject}</div>
                <div class="article-date">
                    ${details.submissionDate.substring(0, 4)}/${details.submissionDate.substring(4, 6)}/${details.submissionDate.substring(6, 8)}
                    (${submissionID.split("/")[1]})
                </div>
            </div>
            <div class="article-title col-12 np">
                <a href="https://archive.gd.edu.kg/abs/${details.successor ? submissionID : submissionID.split("/")[0] + '/'}">
                    ${details.title}
                </a>
            </div>
            <div class="article-abstract">
                ${details.abstract.split(' ').slice(0, 35).join(' ') + (details.abstract.length > 35 ? '...' : '')}
            </div>
        `;

        if (i < 4) {
            const hr = document.createElement('hr');
            div.appendChild(hr);
        }

        fragment.appendChild(div);
    }

    recentPreprintsElement.appendChild(fragment);
}

async function search() {
    event.preventDefault();
    const searchQuery = document.getElementById('searchQuery').value;
    const subject = document.getElementById('subject').value;
    const author = document.getElementById('author').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const sortOption = document.getElementById('sortOption').value;
    const versionOption = document.getElementById('versionOption').value;

    if ((searchQuery === "undefined" || searchQuery === "") &&
        (subject === "undefined" || subject === "") &&
        (author === "undefined" || author === "") &&
        (startDate === "undefined" || startDate === "") &&
        (endDate === "undefined" || endDate === "")) {
        var resultsContainer = document.getElementById('searchResults');
        resultsContainer.innerHTML = '';
        resultsContainer.innerHTML = '<p><i>Sorry, your query produced no result.</i></p>';
        return;
    }

    try {
        oboe('https://archive.gd.edu.kg/metadata.json')
            .node('!.*', function(jsonData) {
                const papersArray = Object.keys(jsonData).map(key => ({
                    id: key,
                    ...jsonData[key],
                    author: jsonData[key].author ?
                        jsonData[key].author.map(author =>
                            `${author.firstName} ${author.middleName ? author.middleName + ' ' : ''}${author.lastName}`
                        ) : [],
                    submissionDate: jsonData[key].submissionDate ? 
                        `${jsonData[key].submissionDate.slice(0, 4)}-${jsonData[key].submissionDate.slice(4, 6)}-${jsonData[key].submissionDate.slice(6, 8)}T${jsonData[key].submissionDate.slice(8, 10)}:${jsonData[key].submissionDate.slice(10, 12)}:${jsonData[key].submissionDate.slice(12, 14)}Z` : 
                        null
                }));

                const options = {
                    keys: ['title', 'id', 'abstract', 'keywords'],
                    threshold: 0.1,
                    includeMatches: true,
                    findAllMatches: true,
                    useExtendedSearch: true
                };

                const fuse = new Fuse(papersArray, options);
                let filteredData = searchQuery ? fuse.search(searchQuery).map(result => result.item) : papersArray;

                if (author !== "undefined" && author !== "") {
                    filteredData = filteredData.filter(paper =>
                        paper.author.some(a => a.toLowerCase().includes(author.toLowerCase()))
                    );
                }

                if (subject !== "undefined" && subject !== "") {
                    filteredData = filteredData.filter(paper => paper.subject === subject);
                }

                if (startDate !== "undefined" && startDate !== "") {
                    filteredData = filteredData.filter(paper => paper.submissionDate && new Date(paper.submissionDate) >= new Date(startDate));
                }

                if (endDate !== "undefined" && endDate !== "") {
                    filteredData = filteredData.filter(paper => paper.submissionDate && new Date(paper.submissionDate) <= new Date(endDate));
                }

                if (sortOption === "desc") {
                    filteredData.sort((a, b) => new Date(b.submissionDate) - new Date(a.submissionDate));
                } else {
                    filteredData.sort((a, b) => new Date(a.submissionDate) - new Date(b.submissionDate));
                }

                if (versionOption === "latest") {
                    filteredData = filteredData.filter(paper => paper.successor === null);
                }

                var resultsContainer = document.getElementById('searchResults');
                resultsContainer.innerHTML = '';
                if (filteredData.length === 0) {
                    resultsContainer.innerHTML = '<p><i>Sorry, your query produced no result.</i></p>';
                } else {
                    resultsContainer.innerHTML = 
                        `<p><i>Found ${filteredData.length} result(s).</i></p>`;
                    filteredData.forEach(function(paper) {
                        var truncatedAbstract = paper.abstract.split(' ').slice(0, 75).join(' ');
                        truncatedAbstract += truncatedAbstract.length < paper.abstract.length ? '...' : '';
                        var preprintID = paper.id;
                        var resultDiv = document.createElement('li');
                        resultDiv.innerHTML = 
                            `<p>
                            <a href="https://archive.gd.edu.kg/abs/${paper.successor ? preprintID : preprintID.split("/")[0] + '/'}">archive.gd.edu.kg/abs/${paper.successor ? preprintID : preprintID.split("/")[0] + '/'}</a>&nbsp;&nbsp;
                            <span class="article-tag">${paper.subject}</span> (${preprintID.split("/")[1]})
                            </p>
                            <b><p>${paper.title}</p></b>
                            <p><b>Submission date</b>: ${paper.submissionDate.substring(0, 4)}/${paper.submissionDate.substring(5, 7)}/${paper.submissionDate.substring(8, 10)}</p>
                            <p><b>Author</b>:${paper.author}</p> 
                            <p><b>Abstract</b>: ${truncatedAbstract}</p>
                            <hr>`;
                        resultsContainer.appendChild(resultDiv);
                    });
                }
            })
            .fail(function(error) {
                console.error('Error fetching JSON data:', error);
                return;
            });
    } catch (error) {
        console.error('Error:', error);
    }
}



getRecentPreprints();
