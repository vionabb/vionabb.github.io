<script lang="ts">

type Publication = {
    title: string,
    year: number,
    conference: string,
    authors: string[],
    highlightAuthorIndex: number,
    links: {
        title: string,
        href: string,
        external?: boolean,
    }[],
}

let publications = $state(
    [
        {
            title: 'Integrating a LLM into an Automatic Dance Practice Support System: Breathing Life Into The Virtual Coach',
            year: 2023,
            conference: 'Adjunct Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology',
            authors: ['Julien Blanchet', 'Sixuan Han'],
            highlightAuthorIndex: 0,
            links: [
                {
                    title: 'Paper',
                    href: 'https://dl.acm.org/doi/abs/10.1145/3586182.3625119',
                    external: true,
                }
            ]
        },
        {
            title: 'LearnThatDance: Augmenting TikTok Dance Challenge Videos with an Interactive Practice Support System Powered by Automatically Generated Lesson Plans',
            year: 2023,
            conference: 'Adjunct Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology',
            authors: ['Julien Blanchet', 'Megan E Hillis', 'Yeongji Lee', 'Qijia Shao', 'Xia Zhou', 'David JM Kraemer', 'Devin Balkcom'],
            highlightAuthorIndex: 0,
            links: [
                {
                    title: 'Paper',
                    href: 'https://dl.acm.org/doi/abs/10.1145/3586182.3615801',
                    external: true,
                }
            ]
        },
        {
            title: 'Automatic Generation and Teaching of Dance Lessons from Video',
            year: 2023,
            conference: 'HotMobile \'23: Proceedings of the 24th International Workshop on Mobile Computing Systems and Applications',
            authors: ['Julien Blanchet', 'Megan E Hillis', 'Yeongji Lee', 'Qijia Shao', 'Xia Zhou', 'David JM Kraemer', 'Devin Balkcom'],
            highlightAuthorIndex: 0,
            links: [
                {
                    title: 'Paper',
                    href: 'https://dl.acm.org/doi/abs/10.1145/3572864.3581592',
                    external: true,
                }
            ]
        },
        {
            title: 'Soft Lattice Modules That Behave Independently and Collectively',
            year: 2022,
            conference: 'IEEE Robotics and Automation Letters',
            authors: ['Luyang Zhao', 'Yijia Wu', 'Julien Blanchet', 'Maxine Perroni-Scharf', 'Xiaonan Huang', 'Joran Booth', 'Rebecca Kramer-Bottiglio', 'Devin Balkcom'],
            highlightAuthorIndex: 2,
            links: [
                {
                    title: 'Paper',
                    href: 'https://ieeexplore.ieee.org/abstract/document/9738480',
                    external: true,
                }
            ]
        },
        {
            title: 'Overlapping semantic representations of sign and speech in novice sign language learners',
            year: 2022,
            conference: 'Proceedings of the Annual Meeting of the Cognitive Science Society',
            authors: ['Megan E Hillis', 'Brianna Aubrey', 'Julien Blanchet', 'Qijia Shao', 'Xia Zhou', 'Devin Balkcom', 'David JM Kraemer'],
            highlightAuthorIndex: 2,
            links: [
                {
                    title: 'Paper',
                    href: 'https://escholarship.org/uc/item/4bw8874x',
                    external: true,
                }
            ]
        },
        {
            title: 'Teaching american sign language in mixed reality',
            year: 2020,
            conference: 'Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies',
            authors: ['Qijia Shao', 'Amy Sniffen', 'Julien Blanchet', 'Megan E Hillis', 'Xinyu Shi', 'Themistoklis K Haris', 'Jason Liu', 'Jason Lamberton', 'Melissa Malzkuhn', 'Lorna C Quandt', 'James Mahoney', 'David JM Kraemer', 'Xia Zhou', 'Devin Balkcom'],
            highlightAuthorIndex: 2,
            links: [
                {
                    title: 'Paper',
                    href: 'https://dl.acm.org/doi/abs/10.1145/3432211',
                    external: true,
                }
            ]
        }
    ] as Publication[]
)
</script>

<main class="max-w-prose p-4 p-4 mx-auto">
    <div class="prose">
        <h1 class="">Publications</h1>
    </div>

    <div class="space-y-4 mt-4">
    {#each publications as pub}
        <div class="card shadow-lg compact bg-base-200">
            <div class="card-body">
                <h2 class="card-title">{pub.title}</h2>
                <h3 class="card-subtitle">{pub.conference} ({pub.year})</h3>
                <p class="card-text">
                    {#each pub.authors as author, i}
                        {author}{i == pub.highlightAuthorIndex ? '*' : ''}{i == pub.authors.length - 1 ? '' : ', '}
                    {/each}
                </p>
                {#if pub.links.length > 0}
                <div class="card-actions justify-end">
                    {#each pub.links as link}
                        <a href={link.href} class="btn btn-primary btn-sm">
                            {link.title}
                            {#if link.external}
                                <span class="icon-[ic--baseline-open-in-new]"></span>
                            {/if}
                        </a>

                    {/each}
                </div>
                {/if}
            </div>
        </div>
    {/each}
    </div>
</main>