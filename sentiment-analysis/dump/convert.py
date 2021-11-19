import json

with open("positive_words.txt") as f:
    positive = f.read().splitlines()

with open("negative_words.txt") as f:
    negative = f.read().splitlines()

feedback_json = {}
feedback_json['positive'] = positive
feedback_json['negative'] = negative

with open('feedback.json','w') as outfile:
    json.dump(feedback_json, outfile)