# Word Frequency Graph

This project analyzes a given text file to count the frequency of each word and generates a visual graph representing these frequencies.

## Project Structure

```
word-frequency-graph
├── src
│   ├── app.ts
│   ├── graph.ts
│   ├── textProcessor.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd word-frequency-graph
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Prepare a text file containing the text you want to analyze. For example, `input.txt`.

2. Run the application using ts-node:
   ```
   npx ts-node src/app.ts input.txt
   ```

3. The application will process the text file, count the word frequencies, and generate a graph.

## Dependencies

This project uses the following libraries:
- ts-node: To run TypeScript files directly.
- A graphing library (e.g., Chart.js, D3.js) for visualizing the word frequencies (to be specified in package.json).

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.