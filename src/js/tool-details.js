const toolsData = {
    'bubble-sort': {
        name: 'Bubble sort',
        usage: 'Bubble sort is used for sorting arrays.',
        details: 'Bubble sort is not optimized for large datasets (O(n^2)).',
        github: 'https://github.com/algos/bubblesort',
        snippet: 'function bubbleSort(arr) { /* ... */ }'
    },
    'quick-sort': {
        name: 'Quick sort',
        usage: 'Quick sort is a highly efficient sorting algorithm.',
        details: 'Quick sort is generally faster in practice than other O(n log n) algorithms.',
        github: 'https://github.com/algos/quicksort',
        snippet: 'function quickSort(arr) { /* ... */ }'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const toolId = urlParams.get('id');
    const tool = toolsData[toolId];
    if (tool) {
        document.title = `Dev Tools Showcase - ${tool.name}`;
        document.querySelector('h1').textContent = `Tool details: ${tool.name}`;

        document.querySelector('dd.tool-name').textContent = tool.name; 
        document.querySelector('dd.tool-usage').textContent = tool.usage; 
        document.querySelector('dd.tool-details').textContent = tool.details; 
        document.querySelector('.code-snippet code').textContent = tool.snippet;
    } else {
        document.querySelector('main').innerHTML = '<h1>404 Tool Not Found</h1>';
    }
})
