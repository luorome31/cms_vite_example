import $ from 'jquery';
import getItemSummary from '../../service/item_summary_get.js';

const itemData = await getItemSummary();

for (let i = 0; i < itemData.length; i++) {
    const newRow = $('<tr>');
    const item = itemData[i];
    // Add a row to the table
    newRow.append($('<td>').text(item.itemId));
    newRow.append($('<td>').text(item.category));
    newRow.append($('<td>').text(item.product));
    newRow.append($('<td>').text(item.price));
    newRow.append($('<td>').text(item.quantity));
    newRow.append($('<td>').append(
        $('<button>').addClass('btn-secondary btn').attr('data-bs-target', '#staticBackdrop').attr('data-itemid', item.itemId).attr('data-bs-toggle', 'modal').text('修改'),
        $('<button>').addClass('btn-secondary btn').text('下架')
    ));
    $('#itemBody').append(newRow);
}


