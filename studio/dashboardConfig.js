export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61e28742af98a2ea0d87e132',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-eei45ru9',
                  apiId: 'dd34aa45-f5e9-41f3-bffc-bb68bb315485'
                },
                {
                  buildHookId: '61e28742a71e1ee08873adc3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sfpzjt4o',
                  apiId: '72843293-749e-446d-be08-6e295535a527'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Raufsardar/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sfpzjt4o.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
