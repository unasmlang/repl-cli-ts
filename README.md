# unasm.ts cli & repl

## building

1. clone the monorepo
```bash
git clone --recurse-submodules -j8 git@github.com:unasmlang/monorepo.git
```
2. cd into the cli dir
```bash
cd ts/cli
```
3. setup [libunasm](https://github.com/unasmlang/libunasm-ts)
```bash
pnpm update-lang
```
4. build
```bash
pnpm build
```
5. package
```
pnpm package
```
6. done - there's now a binary in the repo you can run

## usage
### repl
1. run the executable
2. type ur code (remember, if you have any jmp's or lbl's, you must jmp to ones defined previously in the same line! line history is NOT preserved cross-line)
3. profit

### cli
1. run the executable, add the (.unasm) file as the 2nd argument
2. profit
