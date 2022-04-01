export const MyPublications = `
@inproceedings{ding_derepo_2020,
\ttitle = {Derepo: a distributed privacy-preserving data repository with decentralized access control for smart health},
\tcopyright = {All rights reserved},
\tisbn = {1-72816-550-4},
\tbooktitle = {2020 7th {IEEE} {International} {Conference} on {Cyber} {Security} and {Cloud} {Computing} ({CSCloud})/2020 6th {IEEE} {International} {Conference} on {Edge} {Computing} and {Scalable} {Cloud} ({EdgeCom})},
\tpublisher = {IEEE},
\tauthor = {Ding, Yepeng and Sato, Hiroyuki},
\tyear = {2020},
\tpages = {29--35},
}

@inproceedings{ding_dagbase_2020,
\ttitle = {Dagbase: a decentralized database platform {Using} {DAG}-based consensus},
\tcopyright = {All rights reserved},
\tisbn = {1-72817-303-5},
\tbooktitle = {2020 {IEEE} 44th {Annual} {Computers}, {Software}, and {Applications} {Conference} ({COMPSAC})},
\tpublisher = {IEEE},
\tauthor = {Ding, Yepeng and Sato, Hiroyuki},
\tyear = {2020},
\tpages = {798--807},
}

@inproceedings{ding_bloccess_2020,
\ttitle = {Bloccess: towards fine-grained access control using blockchain in a distributed untrustworthy environment},
\tcopyright = {All rights reserved},
\tisbn = {1-72811-035-1},
\tbooktitle = {2020 8th {IEEE} {International} {Conference} on {Mobile} {Cloud} {Computing}, {Services}, and {Engineering} ({MobileCloud})},
\tpublisher = {IEEE},
\tauthor = {Ding, Yepeng and Sato, Hiroyuki},
\tyear = {2020},
\tpages = {17--22},
}

@inproceedings{ding_formalizing_2020,
\ttitle = {Formalizing and {Verifying} {Decentralized} {Systems} with {Extended} {Concurrent} {Separation} {Logic}},
\tcopyright = {All rights reserved},
\tbooktitle = {International {Conference} on {Algorithms} and {Architectures} for {Parallel} {Processing}},
\tpublisher = {Springer},
\tauthor = {Ding, Yepeng and Sato, Hiroyuki},
\tyear = {2020},
\tpages = {480--494},
}

@article{ding_formalism-driven_2022,
\ttitle = {Formalism-{Driven} {Development}: {Concepts}, {Taxonomy}, and {Practice}},
\tvolume = {12},
\tcopyright = {All rights reserved},
\tissn = {2076-3417},
\turl = {https://www.mdpi.com/2076-3417/12/7/3415},
\tdoi = {10.3390/app12073415},
\tnumber = {7},
\tjournal = {Applied Sciences},
\tauthor = {Ding, Yepeng and Sato, Hiroyuki},
\tyear = {2022},
}
`

export const MyPublicationsBib = {
    entries: [
        {
            type: 'inproceedings',
            id: 'ding_dagbase_2020',
            raw: '@inproceedings{ding_dagbase_2020,\n' +
                '\ttitle = {Dagbase: a decentralized database platform {Using} {DAG}-based consensus},\n' +
                '\tcopyright = {All rights reserved},\n' +
                '\tisbn = {1-72817-303-5},\n' +
                '\tbooktitle = {2020 {IEEE} 44th {Annual} {Computers}, {Software}, and {Applications} {Conference} ({COMPSAC})},\n' +
                '\tpublisher = {IEEE},\n' +
                '\tauthor = {Ding, Yepeng and Sato, Hiroyuki},\n' +
                '\tyear = {2020},\n' +
                '\tpages = {798--807},\n' +
                '}',
            fields: [
                {
                    key: 'title',
                    value: 'Dagbase: a decentralized database platform {Using} {DAG}-based consensus',
                    type: 'String'
                },
                {key: 'copyright', value: 'All rights reserved', type: 'String'},
                {key: 'isbn', value: '1-72817-303-5', type: 'String'},
                {
                    key: 'booktitle',
                    value: '2020 {IEEE} 44th {Annual} {Computers}, {Software}, and {Applications} {Conference} ({COMPSAC})',
                    type: 'String'
                },
                {key: 'publisher', value: 'IEEE', type: 'String'},
                {
                    key: 'author',
                    value: 'Ding, Yepeng and Sato, Hiroyuki',
                    type: 'String'
                },
                {key: 'year', value: '2020', type: 'String'},
                {key: 'pages', value: '798--807', type: 'String'}
            ]
        },
        {
            type: 'article',
            id: 'ding_formalism-driven_2022',
            raw: '@article{ding_formalism-driven_2022,\n' +
                '\ttitle = {Formalism-{Driven} {Development}: {Concepts}, {Taxonomy}, and {Practice}},\n' +
                '\tvolume = {12},\n' +
                '\tcopyright = {All rights reserved},\n' +
                '\tissn = {2076-3417},\n' +
                '\turl = {https://www.mdpi.com/2076-3417/12/7/3415},\n' +
                '\tdoi = {10.3390/app12073415},\n' +
                '\tnumber = {7},\n' +
                '\tjournal = {Applied Sciences},\n' +
                '\tauthor = {Ding, Yepeng and Sato, Hiroyuki},\n' +
                '\tyear = {2022},\n' +
                '}',
            fields: [
                {
                    key: 'title',
                    value: 'Formalism-{Driven} {Development}: {Concepts}, {Taxonomy}, and {Practice}',
                    type: 'String'
                },
                {key: 'volume', value: '12', type: 'String'},
                {key: 'copyright', value: 'All rights reserved', type: 'String'},
                {key: 'issn', value: '2076-3417', type: 'String'},
                {
                    key: 'url',
                    value: 'https://www.mdpi.com/2076-3417/12/7/3415',
                    type: 'String'
                },
                {key: 'doi', value: '10.3390/app12073415', type: 'String'},
                {key: 'number', value: '7', type: 'String'},
                {key: 'journal', value: 'Applied Sciences', type: 'String'},
                {
                    key: 'author',
                    value: 'Ding, Yepeng and Sato, Hiroyuki',
                    type: 'String'
                },
                {key: 'year', value: '2022', type: 'String'}
            ]
        }
    ]
}