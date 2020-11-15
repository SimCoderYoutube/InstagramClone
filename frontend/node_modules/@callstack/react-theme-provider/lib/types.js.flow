/* @flow */

export type $DeepShape<O: Object> = $Shape<
  $ObjMap<O, (<V: Object>(V) => $DeepShape<V>) & (<V>(V) => V)>
>;
