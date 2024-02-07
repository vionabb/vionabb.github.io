<script lang="ts">

type Publication = {
    title: string,
    year: number,
    conference: string,
    authors: string[],
    highlightAuthorIndex: number,
    doi?: string,
    nonDoiPaperLink?: string,
    artifacts: {
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
            doi: '10.1145/3586182.3625119',
            artifacts: []
        },
        {
            title: 'LearnThatDance: Augmenting TikTok Dance Challenge Videos with an Interactive Practice Support System Powered by Automatically Generated Lesson Plans',
            year: 2023,
            conference: 'Adjunct Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology',
            authors: ['Julien Blanchet', 'Megan E Hillis', 'Yeongji Lee', 'Qijia Shao', 'Xia Zhou', 'David JM Kraemer', 'Devin Balkcom'],
            highlightAuthorIndex: 0,
            doi: '10.1145/3586182.3615801',
            artifacts: []
        },
        {
            title: 'Automatic Generation and Teaching of Dance Lessons from Video',
            year: 2023,
            conference: 'HotMobile \'23: Proceedings of the 24th International Workshop on Mobile Computing Systems and Applications',
            authors: ['Julien Blanchet', 'Megan E Hillis', 'Yeongji Lee', 'Qijia Shao', 'Xia Zhou', 'David JM Kraemer', 'Devin Balkcom'],
            highlightAuthorIndex: 0,
            doi: '10.1145/3572864.3581592',
            artifacts: []
        },
        {
            title: 'Soft Lattice Modules That Behave Independently and Collectively',
            year: 2022,
            conference: 'IEEE Robotics and Automation Letters',
            authors: ['Luyang Zhao', 'Yijia Wu', 'Julien Blanchet', 'Maxine Perroni-Scharf', 'Xiaonan Huang', 'Joran Booth', 'Rebecca Kramer-Bottiglio', 'Devin Balkcom'],
            highlightAuthorIndex: 2,
            doi: '10.1109/LRA.2022.3160611',
        },
        {
            title: 'Overlapping semantic representations of sign and speech in novice sign language learners',
            year: 2022,
            conference: 'Proceedings of the Annual Meeting of the Cognitive Science Society',
            authors: ['Megan E Hillis', 'Brianna Aubrey', 'Julien Blanchet', 'Qijia Shao', 'Xia Zhou', 'Devin Balkcom', 'David JM Kraemer'],
            highlightAuthorIndex: 2,
            nonDoiPaperLink: 'https://escholarship.org/uc/item/4bw8874x',
        },
        {
            title: 'Teaching American Sign Language in Mixed Reality',
            year: 2020,
            conference: 'Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies',
            authors: ['Qijia Shao', 'Amy Sniffen', 'Julien Blanchet', 'Megan E Hillis', 'Xinyu Shi', 'Themistoklis K Haris', 'Jason Liu', 'Jason Lamberton', 'Melissa Malzkuhn', 'Lorna C Quandt', 'James Mahoney', 'David JM Kraemer', 'Xia Zhou', 'Devin Balkcom'],
            highlightAuthorIndex: 2,
            doi: '10.1145/3432211',
        }
    ] as Publication[]
)
</script>

<main class="max-w-prose prose p-4 p-4 mx-auto prose-headings:font-slabserif">
    
    <h1>Publications</h1>
    

    <div class="alert not-prose">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span><strong>Two</strong> additional papers are currently under review.</span>
    </div>

    <div class="space-y-8 mt-8 not-prose">
    {#each publications as pub}
        <div class="font-serif">
            <h2 class="font-slabserif"><span class="">{pub.title}</span></h2>
            {#each pub.authors as author, i}
                {@const isHighlightedAuthor = i == pub.highlightAuthorIndex}
                {@const isLastAuthor = i == pub.authors.length - 1}
                <span class:font-bold={isHighlightedAuthor}>{author}</span>{isLastAuthor ? ". " : ", "}
            {/each}
            
            <span>In <em>{pub.conference}</em>.</span>
            <span>{pub.year}</span>.
            
            {#if pub.doi}
                <a class="btn btn-xs btn-primary" href={"https://doi.org/" + pub.doi} title={"DOI: " + pub.doi}>Paper <span class="icon-[ic--baseline-open-in-new]"></span></a>
            {:else if pub.nonDoiPaperLink}
                <a class="btn btn-xs btn-primary" href={pub.nonDoiPaperLink}>Paper <span class="icon-[ic--baseline-open-in-new]"></span></a>
            {/if}
            
        </div>
        <!-- <div class="card shadow-lg compact bg-base-200">
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
        </div> -->
    {/each}
    </div>
</main>