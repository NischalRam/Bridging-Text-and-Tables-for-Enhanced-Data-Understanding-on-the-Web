const leftItems = document.querySelectorAll('.left .item');
const rightCells = document.querySelectorAll('.right td[data-cell]');

leftItems.forEach((leftItem, index) => {
    leftItem.addEventListener('mouseenter', () => {
        const cellIndex = leftItem.getAttribute('data-cell');
        rightCells[cellIndex].classList.add('highlighted');
    });

    leftItem.addEventListener('mouseleave', () => {
        const cellIndex = leftItem.getAttribute('data-cell');
        rightCells[cellIndex].classList.remove('highlighted');
    });
});

rightCells.forEach((rightCell, index) => {
    rightCell.addEventListener('mouseenter', () => {
        const cellIndex = rightCell.getAttribute('data-cell');
        leftItems[cellIndex].classList.add('highlighted');
    });

    rightCell.addEventListener('mouseleave', () => {
        const cellIndex = rightCell.getAttribute('data-cell');
        leftItems[cellIndex].classList.remove('highlighted');
    });
});
