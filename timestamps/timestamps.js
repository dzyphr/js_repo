let timestamp = new Date;

console.log("Timestamp: ", timestamp);

let timestamp_plus_1min = new Date(timestamp.getTime() + (1000 * 60));

console.log("Timestamp plus 1 minute: ", timestamp_plus_1min);

console.log("Timestamp to readable string: ", timestamp_plus_1min.toString());

console.log("Timestamp to ISO formatted string: ", timestamp_plus_1min.toISOString());
