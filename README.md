Repo for this issue: https://github.com/nrwl/nx/issues/13442

```
npm i
npx nx build
tree dist
```

Should print something like:

```
dist
└── demo
    ├── 3rdpartylicenses.txt
    ├── 94c59975ce51b0f1.png
    ├── a
    │   └── b.md
    ├── index.html
    ├── main.578fbc58d85df821.css
    ├── main.ae36fe10bbc96d1f.js
    ├── main.ae36fe10bbc96d1f.js.LICENSE.txt
    ├── runtime.bf41f068077663f1.js
    ├── small.30bbc3db64a6be673e42.png
    ├── styles.76854af56e9bdd01.css
    ├── styles.7caddb99db6268c5.js
    └── test.md

2 directories, 12 files
```

```
npx nx serve
```

Going to both `http://localhost:4200/test.md` and `http://localhost:4200/a/b.md` should work.
