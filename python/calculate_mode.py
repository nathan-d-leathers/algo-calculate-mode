def calculate_mode(list):

    mode = 0
    count = 0
    for x in list:
        count = list.count(x)
        if count > mode:
            mode = count
            answer = x
    return answer
