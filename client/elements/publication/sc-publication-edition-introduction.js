import { LitElement, html, css } from 'lit';

import { LitLocalized } from '../addons/sc-localization-mixin';
import { setNavigation } from '../navigation/sc-navigation-common';
import { SCPublicationStyles } from '../styles/sc-publication-styles';
import { reduxActions } from '../addons/sc-redux-actions';
import { store } from '../../redux-store';

class ScPublicationEditionIntroduction extends LitLocalized(LitElement) {
  static get styles() {
    return css`
      ${SCPublicationStyles}
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {};
  }

  // constructor() {
  //   super();
  // }

  firstUpdated() {
    this._updateNav();
    reduxActions.changeToolbarTitle('Edition Introduction');
  }

  _updateNav() {
    const navArray = store.getState().navigationArray;
    const currentPath = store.getState().currentRoute.path;
    navArray.length = 3;
    navArray.push({
      title: 'Publications-Edition Introduction',
      url: `${currentPath}`,
      type: 'PublicationPage',
    });
    setNavigation(navArray);
  }

  render() {
    return html`
      <main>
        <article>
          <h1>
            <!--?lit$4004324494$-->The Numbered Discourses: things that are useful every day
          </h1>
          <p class="byline">
            <!--?lit$4004324494$-->Bhikkhu Sujato, 2019
          </p>
          <nav class="toc">
            <ol>
              <li>
                <!--?lit$4004324494$--><a href="#item1">How the Aṅguttara is Organized</a>
              </li>
              <li>
                <!--?lit$4004324494$--><a href="#item2">The Book of the Ones</a>
              </li>
              <li>
                <!--?lit$4004324494$--><a href="#item3">The Book of the Twos</a>
              </li>
              <li>
                <!--?lit$4004324494$--><a href="#item4">The Book of the Threes</a>
              </li>
              <li>
                <!--?lit$4004324494$--><a href="#item5">A Brief Textual History</a>
              </li>
            </ol>
          </nav>
          <p>
            <!--?lit$4004324494$-->The Aṅguttara Nikāya is the last and longest of the four primary divisions of the Sutta
            Piṭaka. The word <i translate="no" lang="pi">aṅguttara</i> literally means “up by one factor”, i.e. “incremental”.
            It refers to the fact that the discourses are arranged by numbered sets, with the numbers increasing by one. I
            have translated it as <cite class="text-translated">Numbered Discourses</cite>, while previously it has been
            translated as the <cite class="text-translated">Numerical Discourses</cite> or the <cite
              class="text-translated">Gradual Sayings</cite>.
          </p>
          <p>
            <!--?lit$4004324494$-->SuttaCentral follows Bhikkhu Bodhi’s translation in counting 8122 discourses in total. The
            summary verse at the end of the collection, however, says there are 9,557 suttas. This scribal remark does not say
            how this count was arrived at; it must have been quite a process to count so many discourses when dealing only
            with palm-leaf manuscripts. In any case, as with the Saṁyutta Nikāya, this count is largely a product of
            discourses repeated according to templates. Many of these consist only of a single word; indeed, the process of
            abbreviation is carried to such extremes that hundreds of suttas do not, in fact, exist at all in the text; they
            are merely numbers to be filled out. Also, in the case of the Ones and Twos, most of the suttas are longer texts
            that have been divided to make the numbers. On SuttaCentral, these are treated as if one <i translate="no"
              lang="pi">vagga</i> was a sutta, and the abbreviated texts likewise are combined. If we count the files of the
            texts combined in this way, we arrive at more reasonable, but still very large, 1407 texts of substance.
          </p>
          <p>
            <!--?lit$4004324494$-->The focus of the <cite class="text-translated">Numbered Discourses</cite> is on practical
            matters of everyday relevance. Guidelines of ethics and character predominate. If the Saṁyutta Nikāya gathers the
            chief teachings on <em>doctrines</em>, the Aṅguttara gathers the teachings on <em>persons</em>. The concerns of
            the lay community are a major focus, and many teachings deal with how to teach.
          </p>
          <p>
            <!--?lit$4004324494$-->The use of numbered sets is found throughout the Buddhist texts, but here it becomes the
            main organizing principle. The typical Aṅguttara discourse consists of a statement that there is certain number of
            something; then an explanation of each item; then a conclusion that echoes the introduction. Sometimes a verse is
            added that summarizes the content. This formal pattern is highly optimized to reinforce learning and memorization.
            It is, in essence, exactly the same format that is used in the nightly news: begin by listing the news items for
            today; give the stories of each of the items; and then summarize the highlights once more. The use of numbered
            sets remains popular today, with the “listicle” being a favorite format for internet articles.
          </p>
          <p>
            <!--?lit$4004324494$-->Unlike these modern examples, however, the sets of teachings in the Aṅguttara are strongly
            structured. They are not merely collections of items on a theme, but make up an integrated sequence. The first
            item is the most fundamental; the subsequent items evolve from or build upon that; and the final item caps off the
            sequence.
          </p>
          <p>
            <!--?lit$4004324494$-->For this reason the Aṅguttara provides an excellent entry point to the canon, especially
            for those with a limited amount of time. It only takes a few minutes to read a sutta, and it will contain within
            itself a complete and useful teaching.
          </p>
          <p>
            <!--?lit$4004324494$-->The Aṅguttara Nikāya has a counterpart in the Ekottarikāgama preserved in the Chinese canon
            (EA). The Ekottarikāgama is a peculiar text of uncertain (possibly Mahāsaṅghika) affiliation, and it differs from
            the Pali text to a much greater extent than the parallels for DN, MN, and SN. In addition, there are two partial
            Ekottarikas in Chinese, as well as a number of independent Ekottarika-style suttas. Moreover, a substantial
            portion of a Sanskrit Ekottarāgama was discovered at Gilgit and has been edited and partially reconstructed by
            Tripāṭhi. While it is difficult to generalize, it seems as if most of these materials lie closer to the Pali text
            than does the main EA in Chinese.
          </p>
          <h2 id="item1">
            <!--?lit$4004324494$-->How the Aṅguttara is Organized
          </h2>
          <p>
            <!--?lit$4004324494$-->The Aṅguttara Nikāya consists of major “books” (<i translate="no" lang="pi">nipāta</i>)
            numbered one through eleven. Each of these contains discourses consisting of the corresponding number of items. As
            usual, the discourses are gathered into <i translate="no" lang="pi">vaggas</i>, which sometimes have a loose
            theme. Each <i translate="no" lang="pi">nipāta</i>, except the first, organizes its <i translate="no"
              lang="pi">vaggas</i> into <i translate="no" lang="pi">paṇṇāsas</i>.
          </p>
          <p>
            <!--?lit$4004324494$-->I don’t know why the Aṅguttara counts to eleven; I would expect a round number. Eleven is
            shared in common with the Chinese Ekottarikāgama, which suggests it was an early feature, yet it does not appear
            to be driven by the texts themselves, as most of the items in the Book of the Elevens consist of teachings
            familiar elsewhere, with the addition of an item or two.
          </p>
          <p>
            <!--?lit$4004324494$-->It sometimes feels as if the Aṅguttara was assembled from leftovers. After the long suttas
            were gathered in the Majjhima and Dīgha, and the shorter suttas on central themes into the Saṁyutta, a large mass
            of texts remained that resisted easy categorization. This included many fascinating and profound teachings, as
            well as a large mass of stock repetitions, and it trailed off into odds and ends of increasingly obscure value.
            It’s as if the redactors, faced with a warehouse of leftovers and bric-à-brac, tried their best to shelve and
            stack the items in a logical way, but were often left with just plonking things on shelves as best they could.
            Since the texts usually had a distinct number in the teaching, this was taken as the organizational principle, in
            lieu of anything more meaningful. Even texts that don’t explicitly mention a number can often be analyzed into a
            set of items, so they could be included too. (See for example <a class="ref" href="/an3.31">AN 3.31</a> and <a
              class="ref" href="/an3.32">AN 3.32</a>.)
          </p>
          <p>
            <!--?lit$4004324494$-->To be clear, it should not be thought that the Aṅguttara lacks the standard teachings
            familiar from the rest of the <i translate="no" lang="pi">nikāyas</i>. On the contrary, we find the four
            absorptions (<a class="ref" href="/an3.58">AN 3.58</a>), the four noble truths and dependent origination (<a
              class="ref" href="/an3.61">AN 3.61</a>), the faculties and powers (<a class="ref" href="/an4.163">AN 4.163</a>;
            the latter in some detail at <a class="ref" href="/an5.12">AN 5.12–16</a>), the threefold training (<a class="ref"
              href="/an3.81">AN 3.81</a>), the divine meditations (<a class="ref" href="/an3.63">AN 3.63</a>), and many more.
            But such teachings are scattered throughout a large mass of suttas on a diverse range of topics.
          </p>
          <p>
            <!--?lit$4004324494$-->In the introduction to his translation, Bhikkhu Bodhi practically abandons any attempt to
            make sense of the structure. He gives an example of a chapter with several seemingly unrelated discourses,
            remarking: “With such apparently arbitrary organization, one cannot but wonder what the compilers had in mind.”
            (<cite class="book">The Numerical Discourses of the Buddha</cite>, introduction, p. 22). As a result, rather than
            analyze the content as it occurs in the Aṅguttara, he developed an extensive and carefully-considered thematic
            analysis. <a href="/an-introduction-bodhi">This essay is available on SuttaCentral</a>, and I encourage anyone
            interested in a serious study of the Aṅguttara to read it.
          </p>
          <p>
            <!--?lit$4004324494$-->I would like to approach the material from a different perspective, however, one that lies
            closer to the experience of reading the text. I find Bhikkhu Bodhi’s question an intriguing one: what were the
            redactors thinking?
          </p>
          <p>
            <!--?lit$4004324494$-->While there is no doubt that the sequence of suttas and ideas in the Aṅguttara is to some
            extent chaotic, is it really plausible that the same body of people who displayed such rigorous dedication to
            classification in the Saṁyutta should simply abandon their efforts in the Aṅguttara? Perhaps to understand the
            redactors better, and through them the teachings that they worked with, we must approach the problem in a new way.
          </p>
          <p>
            <!--?lit$4004324494$-->Here are three organizational principles that I have noticed while reading the Aṅguttara:
          </p>
          <ol>
            <li>
              <!--?lit$4004324494$-->Numerological meaning.
            </li>
            <li>
              <!--?lit$4004324494$-->Thematic clusters, segues, and arcs.
            </li>
            <li>
              <!--?lit$4004324494$-->Spaced repetition.
            </li>
          </ol>
          <p>
            <!--?lit$4004324494$-->Below I will show how these things work out over the first three <i translate="no"
              lang="pi">nipātas</i>. In this way I hope to guide a reader through the wilds until they feel comfortable
            proceeding on their own.
          </p>
          <p>
            <!--?lit$4004324494$-->It is surely not the case that these are the only organizational principles at work. Nor is
            it the case that they fully explain all, or even most, of the randomness. But they do, I believe, hint at a
            guiding understanding that shaped the collection in the form we have it today.
          </p>
          <p>
            <!--?lit$4004324494$-->One general thought first. Much of how we organize and relate to the world is not through
            reason, but through association. If we think of it in terms of the five aggregates, a collection such as the
            Saṁyutta Nikāya has an overall structure that is deliberately thought through and constructed, i.e. it is based on
            rational choices or <i translate="no" lang="pi">saṅkhārās</i>. Perhaps what we need to look for in the Aṅguttara
            is a different way of thinking, one based on perception, memory, and association (<i translate="no"
              lang="pi">saññā</i>).
          </p>
          <p>
            <!--?lit$4004324494$-->But why would such a large mass of texts be organized in such a way? The answer is not hard
            to find. Like so many of the principles that organize the texts, it is for memorization. For a reciter who has to
            keep hundreds of texts in order, <em>any</em> kind of connection works. It doesn’t really matter if it’s the
            topic, a shared word, a syntax, a rhyme, or anything else. Perception recognizes patterns. It associates one thing
            with the next, regardless of how significant the connecting feature is.
          </p>
          <p>
            <!--?lit$4004324494$-->Imagine, if you will, that you’re organizing your personal library. You could use a
            rational system: alphabetical order, subject matter, or size to fit your shelves. But it’s your library, you can
            do what you want. Maybe on one shelf you put books with blue covers; on another, books you haven’t read; and on
            another, books whose smell reminds you of old friends. To anyone else it seems chaotic, but to you it makes
            perfect sense. You can find the book you need when you want to. Perception does the heavy lifting for you, without
            the cognitive strain of having to work through the rational system every time.
          </p>
          <h3>
            <!--?lit$4004324494$-->The meaning of numbers
          </h3>
          <p>
            <!--?lit$4004324494$-->For the most part the use of numbers in Buddhist texts is entirely pragmatic. Once you know
            that a set has a certain number of items, you can tell if you’ve forgotten something.
          </p>
          <p>
            <!--?lit$4004324494$-->Yet numbers have always been imbued with a significance and meaning that transcends mere
            accounting. They allows us to make sense of a complex cosmos through a simple set of conventions. Numbers are used
            in Buddhism to provoke awe, even fear, at the “astronomical” scope of transmigration. Is it possible that the
            symbolic meaning of numbers lends a sense of unity to the various <i translate="no" lang="pi">nipātas</i>?
          </p>
          <p>
            <!--?lit$4004324494$-->Symbolic meaning is, by its very nature, impossible to pin down with precision. Unlike
            rational definition, it does not serve to limit the scope of meaning, but to amplify it through suggestion, hints,
            and connotations. The symbolic meaning of numbers has, so far as I know, mostly been ignored in Buddhist studies.
            A number of numerological observations were made in the number entries in the Rhys Davids’ and Stede’s <cite
              class="book">Pali-English Dictionary</cite>, but I am aware of little since then. However, we can make a few
            general observations.
          </p>
          <dl>
            <dt>
              <!--?lit$4004324494$-->One
            </dt>
            <dd>
              <!--?lit$4004324494$-->The number of harmony, simplicity, and supremacy. It is specially emphasized in the
              context of deep meditation (<i translate="no" lang="pi">jhāna</i> or <i translate="no" lang="pi">samādhi</i>).
              However, unlike many spiritual contexts, in Buddhism it never has a metaphysical sense: Nibbāna is zero, not
              one; it is emptiness, not unity.
            </dd>
            <dt>
              <!--?lit$4004324494$-->Two
            </dt>
            <dd>
              <!--?lit$4004324494$-->Used for pairs, which may be partners—hands, eyes, man and wife—opponents—good vs. evil,
              light vs. dark, pain vs. pleasure—or successors—skill in entering meditation and skill in leaving it. It
              represents the dualities of the world.
            </dd>
            <dt>
              <!--?lit$4004324494$-->Three
            </dt>
            <dd>
              <!--?lit$4004324494$-->Made up of 2 + 1. It adds an extra, often spiritual, dimension to the worldly dualism of
              two. This is quite explicit in such sets as “gratification, drawback, and escape”, and more subtly in, say,
              pleasant, painful, and neutral feeling. Three represents the <em>other</em>; and it is the other which contains
              the seed of transcendence.
            </dd>
            <dt>
              <!--?lit$4004324494$-->Four
            </dt>
            <dd>
              <!--?lit$4004324494$-->The most characteristic number of Buddhism, and the Book of the Fours is the largest of
              the <i translate="no" lang="pi">nipātas</i>. Its primary metaphor is the four quarters, and thus connotes
              totality and balance, most obviously in the four noble truths. Multiples of four have the same meaning at a
              higher order. Ten is similar, in that it is derived from the four quarters, the four intermediate quarters, and
              above and below.
            </dd>
            <dt>
              <!--?lit$4004324494$-->Five
            </dt>
            <dd>
              <!--?lit$4004324494$-->Stems from the hand, which is what we use to count; hence it divides into 4 + 1 (fingers
              and thumb) rather than 2 + 3. The most obvious example of this is the five “grasping” aggregates, where
              consciousness stands against the other four. Likewise in, say, the five faculties and powers, wisdom is the
              “thumb”.
            </dd>
            <dt>
              <!--?lit$4004324494$-->Six
            </dt>
            <dd>
              <!--?lit$4004324494$-->Takes as its root metaphor the body: four limbs, torso, and head. The general sense is a
              “large whole”, and the most prominent set is the six sense fields.
            </dd>
            <dt>
              <!--?lit$4004324494$-->Seven
            </dt>
            <dd>
              <!--?lit$4004324494$-->An astronomical number, derived from the lunar cycles and the heavenly bodies (sun + moon
              + five visible planets). It is used especially commonly in myth, and has the general sense of “the entire cycle
              of life and death”. It appears in this sense in the story of the Bodhisatta’s birth.
            </dd>
          </dl>
          <p>
            <!--?lit$4004324494$-->I believe that we an indeed discern traces of these meanings in the Aṅguttara, and offer
            some examples below. In some cases the texts of a certain number would have been simply imported into the
            collection, while in other cases the text would have been edited specifically to create the necessary numbered
            set. Either way, having some sense of these meanings gives us a perspective through which to see the <i
              translate="no" lang="pi">nipātas</i> as meaningful wholes.
          </p>
          <p>
            <!--?lit$4004324494$-->With such general meanings, and doubtless many exceptions and contradictions, it is not
            really possible to establish beyond doubt that the numbers of the Aṅguttara have a symbolic meaning. If you
            dislike any attempt at reading symbolic meaning, I cannot prove you wrong. But it does, I believe, give us an
            approach through which to appreciate the efforts of the redactors and the manner in which they dealt with their
            diverse and complex material.
          </p>
          <h3>
            <!--?lit$4004324494$-->Thematic clusters, segues, and arcs
          </h3>
          <p>
            <!--?lit$4004324494$-->Despite its chaotic impression, suttas in the Aṅguttara are rarely isolated. Most of the
            time they appear in <em>thematic clusters</em> that deal with the same topic. This might be just a pair of suttas,
            though it’s not uncommon to find an entire <i translate="no" lang="pi">vagga</i> on a specific theme. These are
            often closely related suttas, simply varying a few details from one to the next. Or they may have a loose thematic
            thread, featuring, for example, the same person, or group of persons. In several cases, <i translate="no"
              lang="pi">vaggas</i> of the same name and theme appear multiple times in the collection.
          </p>
          <p>
            <!--?lit$4004324494$-->Such thematic clusters are easy to recognize; but still, it often seems as if there is
            nothing that connects one cluster with the next. However, this is not always the case. Often the shift from one
            cluster to another happens by means of what might be called a <em>thematic segue</em>. When moving from one
            thematic cluster to the next, some common element is maintained. This might be a topic, or simply some formal
            feature—a question format, a word, a syntax, etc. Such hooks help smooth the transition from cluster to cluster.
          </p>
          <p>
            <!--?lit$4004324494$-->In such cases we find that there is some element in the first cluster [A], which is
            combined with a second element [AB] to form a new cluster or extend the old one. Then the second element is
            combined with something else to make yet another cluster [BC]. And perhaps later the second element is dropped
            altogether leaving just the third [C], or it is recombined with something new. If you compare the first element
            [A] with the third [C] there’s nothing in common. Yet the progress from one to the other is clearly gradual. And
            the frequency with which this occurs shows that it is by no means accidental.
          </p>
          <p>
            <!--?lit$4004324494$-->Similar techniques are a stock in trade of musical composition. After introducing a motif,
            the composer gradually transforms and develops it. Eventually they might arrive at a new motif, which shares
            nothing in common with the original, but from which it clearly evolved.
          </p>
          <p>
            <!--?lit$4004324494$-->A thematic segue is often a purely formal technique that says little about the subject
            matter. However, with careful attention we can see that thematic clusters, chained together with segues, sometimes
            evolve over larger spans of text to create a loosely organized <em>thematic arc</em>. Such arcs echo teaching
            frameworks that are familiar from elsewhere, such as the Gradual Training. This is used, for example, to inform
            the shape of the first 75 suttas of the Book of the Ones. Such arcs are by no means as clear and formally
            structured as the teachings on which they are based. Yet the progress from one topic to the next is undeniable.
          </p>
          <p>
            <!--?lit$4004324494$-->Indeed, each <i translate="no" lang="pi">nipāta</i> can be seen as forming its own arc, as
            they typically begin with basic practices, and end with realizing Nibbāna. The repetition series that round out
            each <i translate="no" lang="pi">nipāta</i> also have their own internal arc, leading towards the highest
            qualities.
          </p>
          <h3>
            <!--?lit$4004324494$-->Spaced repetition
          </h3>
          <p>
            <!--?lit$4004324494$-->In the Dīgha and Majjhima Nikāyas, a student would spend a fair period of time memorizing
            one specific text, rehearsing it, and—if they are a good student—inquiring and questioning about the meaning. Only
            when it was mastered would they move on to the next. In the Saṁyutta, a student would learn dozens, even hundreds
            of suttas on the same topic, sharing similar passages and ideas, and often varying little one to the other. Such
            suttas may be memorized quickly, and interpretive problems often arise at the level of the topic rather than the
            individual text.
          </p>
          <p>
            <!--?lit$4004324494$-->But memorizing long texts, or many texts on the same subject, can get boring, for the mind
            is stimulated by variety and surprise. In the Aṅguttara, a student would learn one or two suttas on a topic, or
            maybe a few more, then something else, then back to the original topic, then a third. Now, as we have seen, there
            are various features that help them keep the sequence of texts straight. But perhaps there is something more to
            it: perhaps the very randomness and repetition helps them to learn.
          </p>
          <p>
            <!--?lit$4004324494$-->This is a lot like the modern technique known as “spaced repetition”, commonly used for
            language learning. A vocabulary of words is introduced one at a time in a random sequence. After learning one
            word, one moves on to another. But the first word is then re-introduced a little later to reinforce learning. And
            so it goes, with the same words coming back again and again. In terms of the sequence from one word to the next,
            everything is random. But the overall pattern is carefully optimized to reinforce and speed up memorization.
          </p>
          <p>
            <!--?lit$4004324494$-->Perhaps we could think of it like a school. The Saṁyutta is like a school
            <em>curriculum</em>: everything you need to know on a topic, all in one place. But the Aṅguttara is like a school
            <em>day</em>. One class follows the other, and there is no real rhyme and reason to it. Some things happen fairly
            regularly and predictably, while others seem to just pop up at random. Despite its more chaotic nature, it works:
            that’s how we learn. No-one would suggest that school subjects are best mastered by first learning the science
            curriculum, then the maths, then the history. Not only does the spaced repetition reinforce learning, but it
            provokes us to see new and unexpected connections between things.
          </p>
          <h2 id="item2">
            <!--?lit$4004324494$-->The Book of the Ones
          </h2>
          <p>
            <!--?lit$4004324494$-->I have suggested that the number one carries with it a specific set of connotations,
            notably harmony, simplicity, and supremacy. If this is framed as an overall theme, it might be something like
            this: keep your spiritual practice simple and focused to help your mind attain deep immersion, and in that way you
            can realize the supreme Dhamma. Let us see how the Book of the Ones exemplifies these attributes.
          </p>
          <p>
            <!--?lit$4004324494$-->The Book of the Ones is a rather special case in that virtually the entire <i
              translate="no" lang="pi">nipāta</i> is constructed from fragments and templates. The collection begins with the
            striking assertion that no sight occupies a man’s mind like that of a woman, or a woman’s mind like that of a man.
            The remainder of the exterior senses are listed for each gender binary, making ten suttas in all for the first <i
              translate="no" lang="pi">vagga</i>. This very much has the appearance of a single sutta divided into ten. In the
            Fives (<a class="ref" href="/an5.55">AN 5.55</a>) we find a similar set of statements given in a particular
            context, dealing with the masculine perspective only. And in the Chinese we find that the parallels at EA 9.7 and
            EA 9.8 fit the two halves of this <i translate="no" lang="pi">vagga</i>. This supports the idea that these texts
            were originally combined to form a single sutta, or perhaps a pair of suttas.
          </p>
          <p>
            <!--?lit$4004324494$-->An even clearer example of this is provided by the three pairs of suttas at <a class="ref"
              href="/an1.76">AN 1.76</a> to <a class="ref" href="/an1.81">AN 1.81</a>. Each of the pairs follows the same
            pattern, exemplified by the first pair. <a class="ref" href="/an1.76">AN 1.76</a> says that loss of relatives is a
            small thing, while wisdom is the worst thing to lose. <a class="ref" href="/an1.77">AN 1.77</a> presents the
            inverse: growth of relatives is a small thing, for wisdom is the best thing to grow. But it continues to round off
            the sutta by urging the mendicants to train to grow in wisdom. This conclusion is lacking in the first of the
            pair, and is a clear sign that the text has been divided.
          </p>
          <p>
            <!--?lit$4004324494$-->One should not conclude from this that the text has been assembled haphazardly. On the
            contrary, we can identify a series of arcs that bind long series of suttas together. The opening chapters are
            designed to show the development of meditation, echoing the meditator’s progress in the Gradual Training.
          </p>
          <ul>
            <li>
              <!--?lit$4004324494$-->The first chapter, as we have seen already, deals with the restraint of sexuality, one of
              the foundations of meditation.
            </li>
            <li>
              <!--?lit$4004324494$-->The second chapter deals with the hindrances which must be abandoned before entering deep
              meditation. This is linked via thematic segue from the previous chapter, the link being the phrase “I do not see
              a single thing”.
            </li>
            <li>
              <!--?lit$4004324494$-->The third and fourth chapters deal with the advantages of the developed mind, which has
              been purified through the process of meditation: nothing brings greater happiness and benefit. They continue
              using the phrase “I do not see a single thing”.
            </li>
            <li>
              <!--?lit$4004324494$-->The fifth chapter abandons the phrase “I do not see a single thing”. Here the thematic
              segue is the topic of “mind” (<i translate="no" lang="pi">citta</i>) and its development.
            </li>
            <li>
              <!--?lit$4004324494$-->The fifth chapter ends with two discourses that mention the famous “radiant mind”. These
              are fragments, and a more complete statement is found in the following suttas that start the next chapter. It is
              somewhat unusual to find such closely connected suttas broken over a <i translate="no" lang="pi">vagga</i>
              boundary like this. Note that the “radiant mind” is not a metaphysical term, and neither here nor anywhere else
              in the early Buddhist texts is the mind said to be “intrinsically” or “naturally” or “originally” radiant or
              luminous. On the contrary, the mind is conditioned and hence is not “intrinsically” anything at all. The radiant
              mind is simply a way of talking about meditative absorption or <i translate="no" lang="pi">jhāna</i>.
            </li>
            <li>
              <!--?lit$4004324494$-->The sixth chapter continues on the theme of absorption. However, it changes theme at <a
                class="ref" href="/an1.56">AN 1.56</a>—though maintaining focus on “mind”—and continues by addressing the
              causality of good and bad qualities. In context, these can be understood as pertaining to the wisdom portion of
              meditation, as treated in the fourth of the <i translate="no" lang="pi">satipaṭṭhānas</i>. This series
              culminates at <a class="ref" href="/an1.75">AN 1.75</a> with the perfection of the awakening factors, thus
              signifying the completion of the path.
            </li>
          </ul>
          <p>
            <!--?lit$4004324494$-->A structure such as this is particularly telling as it reveals the intent of the redactors.
            This thematic arc spanning 75 fragmentary suttas does not exist in the sources at all: it is purely implied by the
            choices of the redactors. Their method was to reduce the statements of the Dhamma to their simplest meaningful
            elements, then reassemble them according to the principles of the Dhamma as they understood them.
          </p>
          <p>
            <!--?lit$4004324494$-->And the redactors were even more subtle than that. For not only are these fragments
            assembled to form a coherent whole, but the choice of theme was quite deliberate. Of all the doctrinal contexts in
            Buddhism, it is <i translate="no" lang="pi">samādhi</i> or “unification of mind” where the number one is most
            prominent. In starting with the Ones, the redactors were sensitive to the use of numbers in the canon, and
            arranged their texts to bring the most important “one” to the fore.
          </p>
          <p>
            <!--?lit$4004324494$-->From here, the text shifts focus. As noted above, <a class="ref" href="/an1.71-81">AN
              1.76–81</a> deals with pairs of gain and loss. Then from <a class="ref" href="/an1.82-97">AN 1.82</a> we have a
            series of texts on those things that are harmful and beneficial, starting with the pair of negligence and
            diligence. While these teachings are of course common throughout the canon, it is fitting that they appear here to
            represent the Aṅguttara’s special focus on the fundamentals of a good life. Here they exemplify the aspect of
            <em>simplicity</em>, helping a student to focus on just one aspect of Dhamma at a time.
          </p>
          <p>
            <!--?lit$4004324494$-->The same set of factors is treated a few times with slightly varying templates, the final
            of which says that each of these harmful things leads to the disappearance of Buddhism, while the good things lead
            to its continuation. This leads us up to <a class="ref" href="/an1.98-139">AN 1.129</a>.
          </p>
          <p>
            <!--?lit$4004324494$-->From <a class="ref" href="/an1.98-139">AN 1.130–169</a>, the topic of the preservation of
            the Dhamma is continued, but applied to a new theme, one that is quite distinctive of the Aṅguttara: teaching the
            Dhamma. Specifically, that those who present the Dhamma accurately make much merit and preserve Buddhism, while
            those who distort or misrepresent the Dhamma make bad karma and destroy Buddhism. This series of texts displays
            its own inner structure, as it begins with simply the “teaching” and then continues to differentiate the Dhamma
            more and more finely, especially with the introduction of the Vinaya and a rather extensive list of technical
            terms for monastic discipline. It does not take much to see that an originally simple statement could have been
            drawn out by adding multiple aspects of the teaching, conveniently giving the students of the Aṅguttara some
            Vinaya material to learn.
          </p>
          <p>
            <!--?lit$4004324494$-->This series of suttas clearly grows out of the former, with the theme of preserving
            Buddhism as the thematic segue. Thus we have, from <a class="ref" href="/an1.82-97">AN 1.82</a> through <a
              class="ref" href="/an1.150-169">AN 1.169</a>, a second thematic arc consisting of 88 suttas.
          </p>
          <p>
            <!--?lit$4004324494$-->From <a class="ref" href="/an1.170-187">AN 1.170</a> a new theme is introduced, one that
            also represents a key aspect of the Aṅguttara: persons. Buddhism is, of course, most famous for its teachings on
            not-self, and its impersonal analysis of psychological processes. But there is plenty of material throughout the
            suttas that deals with persons, or character types, and much of that is in the Aṅguttara. These texts were later
            assembled to form the Abhidhamma text the Puggalapaññatti, the “Description of Persons”.
          </p>
          <p>
            <!--?lit$4004324494$-->Of all the persons in Buddhism, the incomparable one is the Buddha himself. While there is
            a series of Buddhas over the ages, in our age he is unique. Hence these suttas speak of the “one person” who
            arises in the world who is uniquely beneficial and transcendent. At <a class="ref" href="/an1.170-187">AN
              1.187</a> the Buddha’s chief disciple, Sāriputta, is praised as the one who continues to roll the wheel of
            Dhamma after the Buddha. This segues into the next series of suttas, which single out individual followers of the
            Buddha for particular praise. This is a rather fascinating list, in which appear many characters from all over the
            canon; not only the four <i translate="no" lang="pi">nikāyas</i>, but the Vinaya and the Khuddaka as well.
            Prominent monks appear in <a class="ref" href="/an1.188-197">AN 1.188–234</a>; nuns from <a class="ref"
              href="/an1.235-247">AN 1.235–247</a>; laymen from <a class="ref" href="/an1.248-257">AN 1.248–257</a>; and
            laywomen, from <a class="ref" href="/an1.258-267">AN 1.258–267</a>. All of these people are “number one” in their
            field, exemplifying the sense of “one” as <em>supremacy</em>.
          </p>
          <p>
            <!--?lit$4004324494$-->The next chapter continues the theme of “persons”, enumerating various things that are
            possible or impossible for various people. For example, it is impossible for one “attained to view”—that is, a
            stream-enterer—to take any condition as permanent. But from <a class="ref" href="/an1.278-286">AN 1.284–295</a>,
            once again we find a thematic segue; the “person” vanishes and the theme of possible and impossible is applied
            rather on an impersonal level: good things cannot come from bad deeds.
          </p>
          <p>
            <!--?lit$4004324494$-->This makes up the third great thematic arc in the Ones, 126 suttas from <a class="ref"
              href="/an1.170-187">AN 1.170</a> to <a class="ref" href="/an1.287-295">AN 1.295</a>. The remainder of the Ones
            continues in a similar way, with fragmented suttas assembled along loose thematic lines. The themes remain
            similar, with one difference. As the Book draws closer to its end, the subject of Nibbāna, the final goal of
            Buddhism, becomes ever more prominent. The final <i translate="no" lang="pi">vagga</i> is called the “Chapter on
            the Deathless”, and it deals directly with the path to full awakening. Thus the sense of thematic unity that has
            been evident to multiple sections of the Book of the Ones is also evident in its overall structure, assembled by
            the redactors to culminate in awakening.
          </p>
          <h2 id="item3">
            <!--?lit$4004324494$-->The Book of the Twos
          </h2>
          <p>
            <!--?lit$4004324494$-->The second <i translate="no" lang="pi">nipāta</i> is a kind of bridge between the “arcs of
            fragments” that characterize the first <i translate="no" lang="pi">nipāta</i> and the more complete suttas that
            become prominent in the remainder of the Aṅguttara. It echoes and amplifies the themes of the first <i
              translate="no" lang="pi">nipāta</i>, while also introducing new ideas.
          </p>
          <p>
            <!--?lit$4004324494$-->It begins with a series of suttas that speak of the fundamental principles of the good
            life: doing good and avoiding bad (<a class="ref" href="/an2.1-10">AN 2.3–4</a>) and the results of deeds in this
            life and the next (<a class="ref" href="/an2.1-10">AN 2.1</a>). This, I think, announces what the redactors aimed
            to be the chief theme of this <i translate="no" lang="pi">nipāta</i>: the idea that there is a moral order in the
            world, there is good and evil, and if we comprehend this we can live our life well. The collection starts by
            emphasizing this fact, and the dire consequences of ignoring it.
          </p>
          <p>
            <!--?lit$4004324494$-->The second chapter builds on this, speaking on the “power of reflection” to look back and
            understand this moral order, and the “power of development” to move on from the bad and develop the good (<a
              class="ref" href="/an2.11-20">AN 2.11–13</a>). A specific example of this is given in the case of a disciplinary
            measure within the Saṅgha (<a class="ref" href="/an2.11-20">AN 2.15</a>; cp. <a class="ref" href="/an2.21-31">AN
              2.21</a>). When one mendicant accuses another of wrongdoing, both should “reflect” on what really happened and
            their own role in the affair, and only then can the issue be properly healed and everyone move on. This chapter
            also details in various respects the way that good and bad deeds lead to various results (<a class="ref"
              href="/an2.11-20">AN 2.16</a>, <a class="ref" href="/an2.11-20">AN 2.17</a>), spelling out a series of results
            that pertain both to this life and the next (<a class="ref" href="/an2.11-20">AN 2.18</a>). The Buddha then
            introduces the idea of a deliberate practice: one should not only recognize these things and reflect on them
            within oneself, but develop the good and give up the bad, for it is possible to do so (<a class="ref"
              href="/an2.11-20">AN 2.19</a>).
          </p>
          <p>
            <!--?lit$4004324494$-->These suttas (and others) build on the teachings found in the first <i translate="no"
              lang="pi">nipāta</i> that deal with basic principles. They conclude the opening arc that establishes the theme
            of this <i translate="no" lang="pi">nipāta</i>: the worldly duality of good and bad, which creates both a
            responsibility and an opportunity to respond.
          </p>
          <p>
            <!--?lit$4004324494$-->But it should not be thought that these chapters are fully coherent and systematic. One
            finds the occasional sutta that appears quite random, for example <a class="ref" href="/an2.1-10">AN 2.10</a> on
            entering the rainy season retreat; or <a class="ref" href="/an2.52-63">AN 2.60</a> on why fauns (<i translate="no"
              lang="pi">kimpurisa</i>) do not use human speech.
          </p>
          <p>
            <!--?lit$4004324494$-->Meanwhile, distinct themes from the first <i translate="no" lang="pi">nipāta</i> are also
            introduced, mixed up without clear order. <a class="ref" href="/an2.11-20">AN 2.14</a> mentions two ways of
            teaching Dhamma—in brief and in detail—while <a class="ref" href="/an2.11-20">AN 2.20</a> says that the survival
            of Buddhism depends on getting both the meaning and the phrasing of the texts correct (also see <a class="ref"
              href="/an2.32-41">AN 2.41</a>). <a class="ref" href="/an2.21-31">AN 2.23</a> reprises the theme that one who
            distorts the teaching misrepresents the Buddha and contributes to the ending of Buddhism. This applies to those
            who claim that things were spoken by the Buddha when they were not.
          </p>
          <p>
            <!--?lit$4004324494$--><a class="ref" href="/an2.21-31">AN 2.24</a> introduces the contrast between the discourses
            that require interpretation (<i translate="no" lang="pi">neyyattha</i>) and those whose meaning is explicit (<i
              translate="no" lang="pi">nītattha</i>). In some suttas (eg. <a class="ref" href="/mn133">MN 133</a>), we find
            that the Buddha gives a brief statement which the mendicants do not understand, so they seek advice on how to
            interpret it. In other cases a verse or doctrinal statement is unclear and the mendicants discuss it. These
            examples show that the process of discussion and analysis of the Buddha’s teaching was underway from the very
            beginning. This process was eventually to be formalized as the various sets of Abhidhamma texts, and spelled out
            in the commentaries. But these later texts did not yet exist, and should not be read back into the suttas.
          </p>
          <p>
            <!--?lit$4004324494$--><a class="ref" href="/an2.21-31">AN 2.31</a> reintroduces another of the themes of the
            first <i translate="no" lang="pi">nipāta</i>: meditation. The pair of serenity (<i translate="no"
              lang="pi">samatha</i>) and discernment (or “insight”, <i translate="no" lang="pi">vipassanā</i>) are said to
            play a part in realization: serenity develops the mind, while <i translate="no" lang="pi">vipassanā</i> develops
            wisdom. Together they lead to the two aspects of awakening: the freedom of heart and the freedom by wisdom.
          </p>
          <p>
            <!--?lit$4004324494$-->But this is, for the moment, an isolated text, for the next series of texts returns to the
            theme of persons. In fact this theme was briefly introduced earlier, when <a class="ref" href="/an2.1-10">AN
              2.2</a> contrasted the efforts of lay folk and renunciants. <a class="ref" href="/an2.32-41">AN 2.32</a> says
            that a good person knows gratitude, while the bad one does not. <a class="ref" href="/an2.32-41">AN 2.33</a>
            speaks of the strongest and most emotional ties of gratitude, those of a child to their parents. The Buddha says
            that even by carrying your parents around for the rest of their lives, feeding and cleaning them, you cannot repay
            them the gift of life. Only by establishing them in the principles of the Dhamma can you repay them. The theme of
            respect for parents is further developed in <a class="ref" href="/an3.31">AN 3.31</a>.
          </p>
          <p>
            <!--?lit$4004324494$-->In <a class="ref" href="/an2.32-41">AN 2.35</a> the Buddha tells a brahmin that the
            traditional religious donation (<i translate="no" lang="pi">dakkhiṇa</i>) is owed to those who are purified, that
            is, the trainee and master on the path. These replace the sacrifice of the brahmins. Next follow some teachings by
            disciples, in which both Sāriputta (<a class="ref" href="/an2.32-41">AN 2.36</a>) and Mahākaccāna (<a class="ref"
              href="/an2.32-41">AN 2.38</a>) make a distinction between inner and outer practice, while Mahākaccāna makes a
            shrewd observation: householders argue about sensual pleasures, but renunciants argue over views (<a class="ref"
              href="/an2.32-41">AN 2.37</a>). In <a class="ref" href="/an2.32-41">AN 2.39</a> the Buddha makes a rather biting
            comparison between a kingdom overrun with bandits and a Saṅgha where the good mendicants are weak, cowed into
            silence. The following chapter (<a class="ref" href="/an2.42-51">AN 2.42–51</a>) expands on this by contrasting
            good and bad assemblies.
          </p>
          <p>
            <!--?lit$4004324494$-->From assemblies as groups of people, the text revisits yet another theme of the first <i
              translate="no" lang="pi">nipāta</i>: the Buddha as the supreme person. Here he is paired with his worldly
            counterpart, the wheel-turning emperor (<a class="ref" href="/an2.52-63">AN 2.52–55</a>). Continuing with the
            theme of kinds of people, <a class="ref" href="/an2.52-63">AN 2.62</a> and <a class="ref" href="/an2.52-63">AN
              2.63</a> describe procedures in the Saṅgha for settling disputes and living harmoniously.
          </p>
          <p>
            <!--?lit$4004324494$-->The next chapter is tightly constructed on the subject of happiness (<i translate="no"
              lang="pi">sukha</i>). It introduces the topic by contrasting the happiness of lay people and that of
            renunciants, of which the latter is better (<a class="ref" href="/an2.64-76">AN 2.64</a>). This continues the
            theme of persons, specifically the contrast between lay folk and renunciants, which was already stated in the
            second text of the <i translate="no" lang="pi">nipāta</i>. Here it is combined with the topic of happiness, which
            is new. A series of suttas expands on this theme; but it uses a thematic segue to move away from the focus on
            “persons” and speak of happiness in purely psychological terms more reminiscent of the Saṁyutta.
          </p>
          <p>
            <!--?lit$4004324494$-->This chapter itself forms another segue—a nested segue if you will—to the next series of
            chapters, the unifying characteristic being the tight integration of short suttas on a single pattern in a <i
              translate="no" lang="pi">vagga</i>, returning to the kind of “vagga as sutta” that we saw in the Book of the
            Ones. Chapter 8 deals with the causes for good and bad qualities; Chapter 9 deals with various miscellaneous pairs
            of “things” (<i translate="no" lang="pi">dhammā</i>); Chapter 10 deals with the contrast between the fool and the
            astute; and Chapter 11, while a little more diverse, caps off this series.
          </p>
          <p>
            <!--?lit$4004324494$--><a class="ref" href="/an2.130-140">AN 2.130</a>–<a class="ref" href="/an2.130-140">AN
              2.133</a> eulogize great disciples, reminding us of the lists of the foremost disciples in the Book of the Ones.
            A few discourses then revisit the theme of good and bad people inheriting the results of their deeds (<a
              class="ref" href="/an2.130-140">AN 2.134</a>–<a class="ref" href="/an2.130-140">AN 2.137</a>). The remainder of
            the <i translate="no" lang="pi">nipāta</i> lists a long series of pairs of contrasted qualities. Particularly
            interesting is the series at <a class="ref" href="/an2.280-309">AN 2.280–309</a> where the Buddha gives the
            reasons for laying down rules for monastics. Normally this is a list of ten reasons, but here they are arranged as
            pairs. The final series speaks of developing deep understanding and letting go by means of the pair of serenity
            and discernment. Thus, despite its main focus on worldly ethics and results, the second <i translate="no"
              lang="pi">nipāta</i>, like the first, ends with the practices leading to awakening.
          </p>
          <h2 id="item4">
            <!--?lit$4004324494$-->The Book of the Threes
          </h2>
          <p>
            <!--?lit$4004324494$-->With this book we move on from the fragmentary assemblages of the Book of the Ones and
            partly the Book of the Twos, and find more conventionally unified suttas. Of course, this is never an absolute, as
            all the books of the Aṅguttara retain extensive repetition series. Still, the focus from now is clearly on the
            whole sutta; and as a consequence, the hand of the redactors is harder to discern.
          </p>
          <p>
            <!--?lit$4004324494$-->That does not mean, however, that there is a dramatic break from the first books. On the
            contrary, the Book of the Threes begins with a thematic <i translate="no" lang="pi">vagga</i> that focuses on the
            familiar contrasting pair of the fool and the astute. The number three is represented in the qualities that are
            said to characterize them. The Bālavagga (Chapter on the Fool) corresponds to the similarly-named third and tenth
            chapters of the Twos, as well as the second chapter of the Fives.
          </p>
          <p>
            <!--?lit$4004324494$-->Like the Books of the Ones and Twos, this <i translate="no" lang="pi">nipāta</i> begins by
            emphasizing the problematic situation that we are in, the tensions and struggles of our worldly situation. The
            second <i translate="no" lang="pi">vagga</i> shifts focus to what we can do about it.
          </p>
          <p>
            <!--?lit$4004324494$-->Thus in <a class="ref" href="/an3.13">AN 3.13</a> we first see a clear example of the
            number three as a worldly binary and a transcendent dimension that resolves the contradiction. This sutta speaks
            of one without hope—someone afflicted by poverty and misery of station, as well as illness of body—and a hopeful
            person, who looks to a bright future. But then there is the one who has done away with hope: since they have
            achieved their goal, there is nothing to look forward to.
          </p>
          <p>
            <!--?lit$4004324494$--><a class="ref" href="/an3.14">AN 3.14</a> makes an important political point: even the
            greatest of rulers are subject to the rule of law (<i translate="no" lang="pi">dhamma</i>). Here the relevant
            group of three is action by body, speech, and mind. This triad—which is pre-Buddhist—expresses one of the
            fundamental principles of the Dhamma, the focus on ethical choices, on doing good deeds. It is found constantly
            throughout the Threes. Whereas a worldly philosophy might take into consideration only a person’s external acts of
            body and speech, for Buddhism the mind is always the most important. It is the mind that is ultimately responsible
            for what we do and say, and it is through the mind that freedom is found. Thus the mind here points to the
            transcendent dimension of escape.
          </p>
          <p>
            <!--?lit$4004324494$-->The next discourse continues with the threefold division of body, speech, and mind, giving
            some practical advice as to how to work for their proper development. For the first time the Aṅguttara ventures
            into narrative. It tells the story of a chariot-maker of the past, who was commissioned by the king to make a new
            war chariot for a battle in six months. This is a rather striking setup: the scale of society is so small that it
            is unremarkable for a king to personally speak to a chariot-maker. And apparently a single chariot is an adequate
            military build-up for war; a war that is, politely enough, scheduled precisely six months in advance. The small
            scale and low stakes of this charming story are a strong contrast with the elaborate and fanciful legends of the
            Dīgha.
          </p>
          <p>
            <!--?lit$4004324494$-->The chariot-maker completes the first wheel only six days before the battle, and is urged
            to rush the second one. But time matters: the first wheel is well-formed and stable, while the second wobbles and
            crashes. The Buddha then goes on to identify himself as the chariot-maker. This too is remarkable, as it is one of
            the very few Jātaka stories in the four <i translate="no" lang="pi">nikāyas</i>. The Buddha-to-be’s humble station
            as a lowly chariot-maker is unusual, as usually he is said to be a great king of the past. It’s also noteworthy
            that his commission is morally dubious: he is an arms manufacturer. Later the Aṅguttara will say that trade in
            arms is one of the forms of wrong livelihood (<a class="ref" href="/an5.177">AN 5.177</a>). One might argue that a
            chariot is not a weapon; but it is explicitly required as a war vehicle, and today we would not hesitate to count,
            say, tanks or a fighter jets as weapons platforms. In the later Jātaka collection, it is not unusual for the
            Bodhisatta to break precepts or commit various acts of dubious morality; after all, the whole point is that he is
            not yet perfect. Still, this adds to the striking impression of this little tale, so much more down to earth and
            realistic than the other Jātakas in the <i translate="no" lang="pi">nikāyas</i>.
          </p>
          <p>
            <!--?lit$4004324494$--><a class="ref" href="/an3.16">AN 3.16</a> introduces the idea of the “guaranteed practice”,
            which consists of three of the elements of the Gradual Training: sense restraint, eating in moderation, and
            wakefulness. These implicitly call back to the very first chapter of the Aṅguttara, here presented in a more
            standard form.
          </p>
          <p>
            <!--?lit$4004324494$-->One of the Aṅguttara’s characteristic rhetorical devices is to contrast the worldly with
            the sacred; remember how <a class="ref" href="/an2.1-10">AN 2.2</a> spoke of the efforts of the lay and the
            renunciant. <a class="ref" href="/an3.19">AN 3.19</a> expands this theme, comparing a shopkeeper who must work
            morning, noon, and night with a mendicant who applies themselves to their meditation morning, noon, and night. <a
              class="ref" href="/an3.20">AN 3.20</a> applies the same metaphor in a different way. These suttas cap off the
            first arc, which deals with understanding the dangers of the world, and working to escape from it.
          </p>
          <p>
            <!--?lit$4004324494$-->The third chapter revisits the theme of “persons”. It begins with a discussion among some
            senior mendicants regarding who is best out of three kinds of spiritually attained person; or in other words, who
            has best implemented the practice encouraged in the first two chapters (<a class="ref" href="/an3.21">AN
              3.21</a>). An interesting comparison is made between treatment of illness and providing spiritual assistance:
            you can’t always help, but you should at least try (<a class="ref" href="/an3.22">AN 3.22</a>).
          </p>
          <p>
            <!--?lit$4004324494$-->A number of suttas in the Threes share a pattern where the first item is a foundation, the
            second is the realization of the four noble truths, and the third is full awakening. This first appears at <a
              class="ref" href="/an3.12">AN 3.12</a>, and is applied in different ways in <a class="ref" href="/an3.24">AN
              3.24</a> and <a class="ref" href="/an3.25">AN 3.25</a>.
          </p>
          <p>
            <!--?lit$4004324494$-->Returning to the theme of meditative immersion with which the entire collection started, we
            are introduced to an intriguing teaching that reappears multiple times in the Aṅguttara, but nowhere else in the
            canon (<a class="ref" href="/an3.32">AN 3.32</a>, <a class="ref" href="/an10.6">AN 10.6</a>, <a class="ref"
              href="/an10.7">AN 10.7</a>, <a class="ref" href="/an11.7">AN 11.7</a>, <a class="ref" href="/an11.18">AN
              11.18</a>–<a class="ref" href="/an11.21">AN 11.21</a>). It begins with a question: could it be that a mendicant
            might attain a state of immersion that is free of all ego and conceit? Normally it is understood that the
            meditative absorptions are shared between ordinary people and enlightened beings on the path. The perfected ones
            are distinguished by having let go the cause of suffering, not because they have attained some special state of
            meditation. But these suttas, with their striking note of wonder, imply that there is a special meditative state
            attained only by the perfected ones.
          </p>
          <p>
            <!--?lit$4004324494$-->This discourse is also distinguished by the fact that it finishes by quoting a verse
            currently included in the Sutta Nipāta, and even correctly names the chapter, the “The Way to the Beyond”. It is
            not at all obvious that the verse was originally intended to refer to a state of meditation. This shows that free
            and imaginative readings of suttas were found even in the earliest times.
          </p>
          <p>
            <!--?lit$4004324494$-->The next discourse (<a class="ref" href="/an3.33">AN 3.33</a>) continues with the theme of
            going beyond ego and conceit, and it too quotes from “The Way to the Beyond”. But it starts with the Buddha in
            what appears to be an uncharacteristically despondent mood, saying that whether he teaches in brief or in
            detail—harking back to <a class="ref" href="/an2.11-20">AN 2.14</a>—it’s hard to find anyone who understands.
          </p>
          <p>
            <!--?lit$4004324494$--><a class="ref" href="/an3.35">AN 3.35</a> narrates a personal encounter with a fellow by
            the name of Hatthaka, who came across the Buddha meditating near his home town of Āḷavī. He asks if the Buddha
            slept well, considering the harshness of his outdoors living. The Buddha replies that he is one of those who sleep
            well in the world, as he is rid of the greed, hate, and delusion that disturb people in their sleep.
          </p>
          <p>
            <!--?lit$4004324494$-->This is the second time this classic triad appears in the Threes. They first appeared in
            the previous sutta, <a class="ref" href="/an3.34">AN 3.34</a>, as the source of deeds, and will recur in this
            sense in multiple suttas in this <i translate="no" lang="pi">nipāta</i>. Like the triad of body, speech, and mind,
            they can be seen to exemplify the 2 + 1 pattern. Greed and hate are a codependent pair, the ugly opposites.
            Delusion underlies them both; but at the same time, the counterpart of delusion is wisdom, and it is through
            wisdom that transcendence is possible.
          </p>
          <p>
            <!--?lit$4004324494$-->This narrative mood ventures into mythology in the next discourse, which gives the Buddhist
            account of the god Yama, lord of the dead. While one might expect a death god to be fearsome, here he takes a
            decidedly Buddhist approach to the afterlife. When the departed are brought to Yama, he neither judges nor
            punishes. Rather, he asks the departed whether he took heed of the messengers sent by the gods: an old person, a
            sick person, and a corpse. These, of course, are three of the four divine messengers seen by the Bodhisattva
            before he went forth (canonically found in the life of Vipassī; see <a class="ref" href="/dn14">DN 14</a>). When
            the departed one replies that he took no heed, Yama castigates him for his negligence and then falls silent. The
            departed is dragged off to endure the sufferings of hell, here recounted in a briefer form than <a class="ref"
              href="/mn129">MN 129</a> and <a class="ref" href="/mn130">MN 130</a>. Yama goes on to lament the pitiful state
            of mortals, including himself, and wishes he could be reborn as a human and practice Buddhism.
          </p>
          <p>
            <!--?lit$4004324494$-->The mythological mood continues in the next couple of suttas (<a class="ref"
              href="/an3.37">AN 3.37</a>, <a class="ref" href="/an3.38">AN 3.38</a>), which introduce a new topic that will be
            very important for the Aṅguttara; namely, the <i translate="no" lang="pi">uposatha</i> or “sabbath”. This was a
            special “holy day” for religious observance observed weekly or on certain special days. Apparently the ministers
            of the Four Great Kings survey the earth on such days to see if people are honoring their betters and doing good.
            If they are, they rejoice, for they know that such people will be reborn in heaven to swell the hosts of the gods,
            whereas if they are not they fear the hosts of the demons will increase. This will of course have serious military
            implications in the ongoing war between the two.
          </p>
          <p>
            <!--?lit$4004324494$-->The next couple of suttas deal with renunciation, first as the Buddha’s recollection of his
            own delicate upbringing (<a class="ref" href="/an3.39">AN 3.39</a>), then as a reflection for how a renunciate is
            to reflect with integrity on their choices (<a class="ref" href="/an3.40">AN 3.40</a>). <a class="ref"
              href="/an3.41">AN 3.41</a> and <a class="ref" href="/an3.42">AN 3.42</a> look at the other side of the coin, the
            qualities that make merit for a lay donor, especially faith and generosity as well as desire to learn. Learning is
            taken up as the theme of the next two suttas (<a class="ref" href="/an3.43">AN 3.43</a> and <a class="ref"
              href="/an3.44">AN 3.44</a>). Then the themes of generosity, faith, and the worthy spiritual life that make merit
            fruitful are revisited (<a class="ref" href="/an3.45">AN 3.45</a>, <a class="ref" href="/an3.46">AN 3.46</a>, <a
              class="ref" href="/an3.48">AN 3.48</a>). Mendicants are then urged to be diligent (<a class="ref"
              href="/an3.49">AN 3.49</a>) and the nature of bad mendicants is disclosed (<a class="ref" href="/an3.50">AN
              3.50</a>). Taken together, this series of 12 suttas can be read as a small thematic arc on the relation between
            lay folk and renunciants, the need for both to have integrity and the proper sense of values in their own sphere,
            and the mutual support of each other through generosity of material things and of teachings.
          </p>
          <p>
            <!--?lit$4004324494$-->Next begins a new <i translate="no" lang="pi">vagga</i>, “On Brahmins”, which as one might
            expect, depicts the Buddha in conversation with brahmins. In <a class="ref" href="/an3.51">AN 3.51</a> and <a
              class="ref" href="/an3.52">AN 3.52</a>, the Buddha is approached by two brahmins, who confess that they have not
            lived a good life, and now, in their dotage, seek for help. The Buddha acknowledges the brevity of life and urges
            restraint of body, speech, and mind. <a class="ref" href="/an3.53">AN 3.53</a> has the Buddha speaking to another
            brahmin on how the Dhamma is to be realized in this very life. He gives a similar teaching to a wanderer (<a
              class="ref" href="/an3.54">AN 3.54</a>) and to the brahmin Jāṇussoṇi (<a class="ref" href="/an3.55">AN
              3.55</a>). That the Buddha’s teaching may be realized in this life is a stock characteristic of the Dhamma (<i
              translate="no" lang="pi">sandiṭṭhiko akāliko</i>), but it is easy to overlook how directly this was a rebuke of
            pre-existing religious traditions. They looked forward to rewards in the future—whether a heavenly rebirth or the
            eventual annihilation of suffering—but the Buddha, while not denying the reality and importance of future fruits,
            refocused spiritual life on the present.
          </p>
          <p>
            <!--?lit$4004324494$--><a class="ref" href="/an3.56">AN 3.56</a> gives a different kind of teaching to a brahmin.
            In a message with a special poignancy in our troubled times, the Buddha explains why civilizations collapse,
            namely, unbridled greed. In <a class="ref" href="/an3.57">AN 3.57</a> the Buddha refutes the wanderer
            Vacchagotta’s accusation that he only encourages giving to his own followers. When the brahmin Tikaṇṇa
            (“Three-ear”) praises true brahmins, the Buddha responds with his own redefinition of a brahmin, rejecting the
            value of birth and Vedic learning, and giving the second part of the Gradual Training, starting with the
            absorptions (<a class="ref" href="/an3.58">AN 3.58</a>; <a class="ref" href="/an3.59">AN 3.59</a> is similar). In
            <a class="ref" href="/an3.60">AN 3.60</a>, the Buddha not only rejects the value of the Vedic sacrifice, he shows
            that by teaching Dhamma one can benefit many more people.
          </p>
          <p>
            <!--?lit$4004324494$-->The seventh <i translate="no" lang="pi">vagga</i> is titled the “Great Chapter”, and it
            introduces a series of discourses on a larger scale. It begins with a thematic segue; <a class="ref"
              href="/an3.61">AN 3.61</a> continues the theme of the relation between Buddhist and non-Buddhist theories, but
            it does so as a straight doctrinal discourse to the mendicants, rather than as an interfaith dialogue. This
            magnificent discourse offers an important framing of dependent origination and it deserves detailed study. This
            Great Chapter is unified by length of sutta rather than by subject; however a number of other suttas deal with
            non-Buddhist philosophy and relations (<a class="ref" href="/an3.64">AN 3.64</a>, <a class="ref" href="/an3.68">AN
              3.68</a>, <a class="ref" href="/an3.70">AN 3.70</a>), including the famous Kālāma Sutta (<a class="ref"
              href="/an3.65">AN 3.65</a>; also <a class="ref" href="/an3.66">AN 3.66</a>).
          </p>
          <p>
            <!--?lit$4004324494$-->Here I will end my analysis, as I think enough examples have been given to illustrate both
            the connectedness and the chaos of this collection. Hopefully the reader can find their own way from here, and not
            feel so bewildered by the sudden shifts and changes they encounter.
          </p>
          <h2 id="item5">
            <!--?lit$4004324494$-->A Brief Textual History
          </h2>
          <p>
            <!--?lit$4004324494$-->The Aṅguttara Nikāya was edited by R. Morris (vols. 1 and 2) and E. Hardy (vols 3–5) on the
            basis of manuscripts in Sinhalese and Burmese scripts; Hardy also made use of the then recently-published royal
            Thai edition. It was published in Latin script by the Pali Text Society from 1885 to 1900. Indexes by M. Hunt and
            Mrs C.A.F. Rhys Davids were added in 1910. The first translation followed in 1932–36 by F.L. Woodward (vols. 1, 2,
            and 5) and E.M. Hare (vols. 3 and 4) under the title <cite class="book">The Book of the Gradual Sayings</cite>.
          </p>
          <p>
            <!--?lit$4004324494$-->As was the case with the Majjhima and Saṁyutta, a number of disparate individual suttas
            from the Aṅguttara were published in book form or the web. However a complete new translation had to wait for
            Bhikkhu Bodhi to complete his work on the Saṁyutta Nikāya. As described in the introduction to his translation, in
            the late 1990s Bhikkhu Bodhi collected Nyanaponika Thera’s four-part series of Wheel booklets into a single volume
            for the International Sacred Literature Trust as <cite class="book">An Aṅguttara Nikāya Anthology</cite>. He then
            added sixty more suttas and published the total of 208 suttas as <cite class="book">The Numerical Discourses of
              the Buddha: An Anthology of Suttas from the Aṅguttara Nikāya</cite> with AltaMira Press in 1999. In 2012 he
            completed the full translation, which was published as <cite class="book">The Numerical Discourses of the
              Buddha</cite> through Wisdom Publications. His Introduction was even more extensive than his previous works;
            less technical than the Saṁyutta introduction, the bulk of it focused on an overview of the teachings found in the
            Aṅguttara. As with his previous translations, this work constituted a major leap forward in accuracy and
            readability and introduced the Aṅguttara to a new generation.
          </p>
          <p>
            <!--?lit$4004324494$-->Where the Pali was unclear I frequently referred to the earlier work of Bodhi, and rarely
            to Woodward/Hare and various translations of specific texts.
          </p>
        </article>
      </main>
    `;
  }
}

customElements.define('sc-publication-edition-introduction', ScPublicationEditionIntroduction);
