export default function CourseTheme() {
  return (
    <div className={""}>
      <main className={"MAIN text-xl"}>
        <h2>Programming = Computation</h2>

        <p>
          This course is built on the theme that programming is about
          computation &mdash; that we can express most programming
          problems as a transformation of data from one value to another.
        </p>
        <p>
          This is an old and powerful program design technique, and most
          programmers intuitively learn it after many years of
          programming. But it is the intention of this course to get you
          started in that path sooner, without having you repeat the same
          mistakes and re-learn the same lessons programmers before you
          had to painfully learn over a long time.
        </p>

        <p>
          The gist of this idea is this: “if you get the data structures
          and their invariants right, most of the code will just kind of
          write itself”. Linus Torvalds once claimed that the difference
          between a bad programmer and a good one is whether they consider
          their code or their data structures more important.
        </p>

        <p>
          The data structures we'll be considering in this course are not
          the low-level algorithmic primitives like stacks, queues, and
          trees. Instead, we’re talking about data models used for
          application programming. The data model for things like a
          multi-player platformer game, or small but rich front-end
          components like an image gallery with infinite scroll and
          graceful error handling. Or even larger systems like a
          Twitter-like platform.
        </p>

        <p>
          We will encounter many modelling opportunities in this course,
          and the approach will be to get you spend time upfront designing
          how your data is organized. We will model our computations as a
          series of transformations of data from one type to another. And
          the marrow of these exercises are when we discover and
          synthesize non-obvious intermediate data structures, allowing us
          to elegantly distil the gist of the problem into our code.
        </p>

        <h2>Typed Functional Programming with ReScript/OCaml</h2>
        <p>
          We chose the typed functional programming paradigm to teach this
          because it has all the right features to support this mode of
          thinking. Of course you can do data-first programming in any
          programming language, but just like a knife is a more practical
          tool for slicing onions than a spoon, the typed functional
          programming paradigm is the right tool for thought for
          data-first programming.
        </p>

        <p>
          What makes Typed FP special here? To list just two: this
          paradigm lets you describe the shape and structure of your data
          using types, and the compiler sits along with you as you
          program, spotting gaps in your thinking and helping you fill
          them. And it allows you to describe a value as being one of many
          - this is called “sum types”, a feature that is still lacking in
          mainstream programming languages, but essential to a data-first
          style of programming.
        </p>

        <p>
          If you did not understand the above paragraph, don’t worry, that
          is what this course is about. These concepts are not difficult
          to learn; they are just new to you and not covered in mainstream
          literature. Remember: this course is created by programmers
          who’ve been writing code for their daily bread. There is no
          fluff, no difficult academic jargon, just sheer programming and
          the fun of becoming better at it.
        </p>
      </main>
    </div>
  );
}
