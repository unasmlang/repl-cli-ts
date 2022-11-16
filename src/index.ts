import * as libunasm from './libunasm/dist/インデックス';
import * as fs from 'fs';
import * as readline from 'readline/promises';
import {
  stdin as input, stdout as output
} from 'process';

// since we're in nodejs, replace console
libunasm.instructions.out = ()=>process.stdout.write(libunasm.registers.r1.toString());
libunasm.instructions.outc = ()=>process.stdout.write(String.fromCharCode(libunasm.registers.r1));

const fileName = process.argv[2];
if (!fileName || !fs.existsSync(fileName)) {
  // repl
  const rl = readline.createInterface({
    input, output
  });
  console.log(`libunasm.ts version ${libunasm.version}`);
  console.log('welcome to the unasm repl');
  console.log('excluding instruction number (& therefor jmps across lines), the state persists across script execution.');
  console.log('use ctrl+c to exit.');
  (async () => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const ans = await rl.question('> ');
      console.log(libunasm.execute(ans));
      for (const idx in libunasm.labels)
        delete libunasm.labels[idx];
    }
  })();
}
else
  libunasm.execute(fs.readFileSync(process.argv[2], 'utf-8'));
