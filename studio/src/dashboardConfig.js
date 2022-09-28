export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6333ad1a6a6ffd1d6654139e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-c6d4n5jc",
                  apiId: "a504b605-0c20-4b9f-8d89-f3dc4b2d30be",
                },
                {
                  buildHookId: "6333ad1a7c545615941d0c38",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-9txyzfcg",
                  apiId: "4c3f6fbc-3e50-4ac3-8365-6d7546f2e25c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/stustustudio/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-9txyzfcg.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
