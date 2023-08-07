-- Query untuk Result_1
CREATE TABLE Result_1 AS
SELECT DISTINCT item AS item
FROM Asset;

-- Query untuk Result_2
CREATE TABLE Result_2 AS
SELECT
    user_id,
    GROUP_CONCAT(DISTINCT item ORDER BY item) AS asset
FROM Asset
GROUP BY user_id;
